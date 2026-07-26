---
title: Designing Laravel queues that survive failure
date: 2026-07-12
lede: Most queue bugs aren't queue bugs. They're jobs written as if the happy path were the only path.
---

A queued job is a promise you make to your future self: this work will happen, eventually, possibly twice, possibly on a server that just rebooted. Once you accept that framing, most of the patterns below stop feeling like ceremony and start feeling like the minimum.

## Jobs are contracts

Keep the payload small and the guarantees explicit. A job should carry identifiers, not state — fetch fresh state when it runs, and make the work idempotent so a retry is harmless rather than catastrophic.

The version below carries an `Order` model, but Laravel serialises it as an ID and reloads it at run time via `SerializesModels`. That is the behaviour you want: the row is read when the job executes, not when it was dispatched five minutes ago.

```php
public function handle(): void
{
    DB::transaction(function () {
        $this->order->markPaid();
        event(new OrderPaid($this->order));
    });
}

public function failed(Throwable $e): void
{
    $this->order->flagForReview($e);
}
```

Two things are worth noticing. The state change and the event live in the same transaction, so a listener never fires for a write that rolled back. And `failed()` exists — the job has an opinion about what happens after the last retry, instead of leaving a silent gap in the system.

Idempotency is the other half of the contract. If `markPaid()` is written so a second call is a no-op, a duplicate delivery costs you a wasted query instead of a double charge. Assume at-least-once delivery, because that is what you actually have.

## Retry with intention

Backoff schedules, retry caps, and the `failed()` hook are product decisions in disguise. Decide what the user should experience when the third attempt fails — then write that down in code, not in a runbook.

```php
public int $tries = 5;

public array $backoff = [10, 30, 120, 600];

public function retryUntil(): DateTime
{
    return now()->addHour();
}
```

`$backoff` as an array gives you a real schedule rather than a single flat delay: fast retries absorb a blip, slow ones wait out an outage. `retryUntil()` puts a wall clock on the whole thing, which matters for work that stops being useful once it's stale — a "your export is ready" email an hour late is fine, a fraud check an hour late is not.

Not every failure deserves a retry. A 500 from an upstream API is worth trying again; a 422 means the payload is wrong and will be wrong forever. Catching the second kind and calling `$this->fail($e)` moves it straight to the failed table instead of burning four more attempts on a certainty.

> Retries are a product decision, not an infrastructure detail.

## Make failure visible

`queue:work` is not a supervisor. If the process dies, something must restart it — Supervisor, systemd, or Horizon. Run `queue:restart` on deploy, or workers keep serving the code they booted with, which produces the most confusing class of bug there is: a fix that's live on the web tier and absent in the queue.

Then watch three numbers: queue depth, oldest pending job age, and failed-job count since the last deploy. Depth alone lies — a queue of 400 fast jobs is healthy, a queue of 4 stuck ones is not. Age is what tells you a worker died.

Failed jobs need a home too. `queue:retry` is fine for a handful, but if a batch fails from a bad deploy, you want to know which jobs, from which window, and whether replaying them is safe — that last question is answered by whether you made the job idempotent back at step one.

## Keep the queue boring

A few rules that have held up across the systems I've shipped:

- One job, one responsibility. Chained side effects belong in separate jobs or an explicit `Bus::chain()`.
- Never queue anything that needs the request context — session, auth user, uploaded temp files. Pass what it needs.
- Separate queues by latency expectation, not by feature. `default` and `emails` competing for the same worker means a slow mail provider delays everything.
- Log the job ID and the entity ID on every failure. Grep-ability is worth more at 2am than a clever exception hierarchy.

None of this is clever. That's the point — queues reward boring code, written by someone who assumed the worst and shipped anyway.
