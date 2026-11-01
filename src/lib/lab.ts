/**
 * Side projects listed under /lab/ — things built with an AI pair, shipped in
 * evenings and weekends. One entry per project; screenshots live in
 * public/lab/<slug>/shot-N.png and captions are indexed by order.
 */
export type LabStatus = 'live' | 'building';

export interface LabProject {
  slug: string;
  name: string;
  /** One sentence, shown on the index and used as the meta description. */
  tagline: string;
  /** Year work started, or "2025–2026" for something still moving. */
  year: string;
  status: LabStatus;
  liveUrl?: string;
  repoUrl?: string;
  /** Short labels for the meta row, most defining first. */
  stack: string[];
  intro: string[];
  features: { title: string; text: string }[];
  /** The AI angle: how the thing was actually built, and what that cost. */
  build: string[];
  shots: string[];
}

export const statusLabel = (p: LabProject) => (p.status === 'live' ? 'Live' : 'In progress');

export const LAB: LabProject[] = [
  {
    slug: 'kid-runner',
    name: 'Kid Runner',
    tagline:
      'Three webcam games my daughter plays with her whole body: a runner, a race track and an open island, with the pose model running on the laptop and nothing leaving it.',
    year: '2026',
    status: 'live',
    liveUrl: 'https://kid-runner.pages.dev',
    repoUrl: 'https://github.com/emtiazzahid/kid-runner',
    stack: ['TypeScript', 'Three.js', 'MediaPipe pose', 'Cloudflare Pages', 'D1', 'Passkeys'],
    intro: [
      'A five-year-old does not want another tapping game. Kid Runner reads the player through the laptop webcam: step left or right to change lanes, jump over logs, duck under bars, put both hands up to grab stars. The camera frames never leave the machine — pose estimation runs in a worker on-device, and there is no video upload, no account needed and no advertising.',
      'It grew into three games on one shell. The runner is the original lane game with challenges a parent can switch on. The race track is a 2.5 km generated circuit driven by holding an invisible steering wheel, with rival cars, traffic and a day-to-night cycle. The island is an open world: chop wood, cook at a campfire, fish, drive a car, paddle a canoe and run errands for the villagers.',
      'Everything a parent needs sits behind one gear icon: a break reminder, a camera nap when nobody is in front of it, an activity report of how long and how actively the child played, and per-game settings so the menu only shows what belongs to the game on screen.',
    ],
    features: [
      {
        title: 'Whole-body input',
        text: 'A gesture engine on top of MediaPipe landmarks detects lane steps, jumps, ducks, hands up, claps, punches, running in place and an invisible steering wheel, each tuned against recorded sessions rather than guessed thresholds.',
      },
      {
        title: 'Three games, one shell',
        text: 'The shell owns the renderer, the camera and the single input drain, and hands frames to whichever game is active. A child picks between them by stepping left or right and jumping.',
      },
      {
        title: 'An island that keeps its state',
        text: 'A 400 m procedural island with a village, a lake and a mountain: weather spells, a ten-minute day, pets that follow and sniff out buried treasure, a map with a pin you can drop. What you build, plant, harvest and drive is saved every twenty seconds.',
      },
      {
        title: 'Plays without hands too',
        text: 'Every game also takes keyboard, mouse or touch, so it works on a phone, with a trackpad, or when the camera is simply not wanted that evening.',
      },
      {
        title: 'Cloud save without an account',
        text: 'Progress stays in the browser for guests. A parent can add a passkey — Touch ID, a fingerprint or the device PIN, no email and no password — and the same stars, stickers and island appear on the next device.',
      },
      {
        title: 'Built for a parent, not a growth team',
        text: 'A break reminder, a camera nap after idle minutes, an activity report, and a spoken voice line before every move so a child who cannot read yet still knows what is coming.',
      },
    ],
    build: [
      'The whole thing was built with Claude Code as the pair: I set the direction, reviewed every diff and played every build; it wrote most of the lines. The repository carries about three hundred node tests over the pure logic — gesture thresholds, physics steps, terrain generation, save migrations — because the fastest way to keep an AI pair honest over a long session is a suite that fails loudly when it drifts.',
      'The discipline that made it work: keep the game logic pure and testable away from Three.js and the DOM, verify in a real browser before every commit rather than trusting the diff, and treat the test run plus a typecheck as the gate on the commit.',
      'It deploys itself — a push to main runs the tests and publishes to Cloudflare Pages. Hosting, database and voice generation together cost nothing a month.',
    ],
    shots: [
      'The island: the village square with the star shop, a villager with a job, and the clock showing the island day.',
      'The race track at night, on the stunt road: the wheel shows the speed, the callout shows the next turn, and running in place fills the nitro.',
      'The runner after dark: step left or right, jump the logs and duck under the bars.',
    ],
  },
  {
    slug: 'family-tree',
    name: 'Family Tree',
    tagline:
      'A bilingual family tree a Bangladeshi family can actually keep: build it in the browser before signing up, invite relatives with a link, and read it on the phone offline.',
    year: '2026',
    status: 'live',
    liveUrl: 'https://familytree-7v1.pages.dev',
    stack: ['Nuxt 4', 'Nitro on Cloudflare Pages', 'D1', 'Drizzle', 'better-auth', 'Flutter'],
    intro: [
      'Most family-tree sites ask for an account and a card before they show you anything. This one opens on a blank canvas: add your parents, your partner, your children, and the tree is already yours in the browser. Registering moves that draft into an account — nothing to re-enter.',
      'It is built for Bengali-speaking families, so every string exists twice, Bengali and English, in one catalogue shared by the website and the phone app. The whole thing is free, with no paid tier to move up to.',
      'The web app is Nuxt 4 on Cloudflare Pages with D1 as the only datastore. The Flutter app is a pure client of that same API: no second backend, no separate database, and the tree layout comes from the server, so the phone and the laptop draw the same shape.',
    ],
    features: [
      {
        title: 'Start before signing up',
        text: 'The draft canvas runs entirely in the browser and keeps the tree in local storage. When you register, the draft is claimed into the new account in one step, and claiming twice cannot duplicate it.',
      },
      {
        title: 'A canvas built for relatives, not boxes',
        text: 'Add a parent, partner, child or sibling straight from a selected card. Generations lay themselves out, any card can be nudged and the override is kept, and there is undo, redo, pan, pinch-zoom, locate-a-person and autosave with a visible save state.',
      },
      {
        title: 'Five ways to read the same tree',
        text: 'The canvas, plus table, pedigree, descendants and timeline views, each with its own tested model, and a faceted search across everyone in the tree.',
      },
      {
        title: 'Partial dates and step relations survive',
        text: 'Dates are stored as written and as parts, so "abt 1920" and "March 1954" are not rounded into a lie. Parent links carry a kind, and partnerships are their own entity with their own dates, so remarriages, step-parents and adoptions stay representable.',
      },
      {
        title: 'Memories and photos',
        text: 'Stories with a title, a partial date, several photos and the people they are about, attached to the tree rather than to one person — and kept outside the version history, so restoring the graph can never delete yesterday’s photos.',
      },
      {
        title: 'Share and invite',
        text: 'A view-only public link, optionally behind a password and an expiry date, with the unlock attempts rate-limited. Relatives join as viewer, editor or admin through an invite link you send yourself, which can be locked to one person’s email address.',
      },
      {
        title: 'Every edit is recoverable',
        text: 'Changes are recorded as revisions grouped per editing sitting, with a before-and-after preview and restore, kept for 200 entries or 90 days. The tree also exports as GEDCOM 5.5.1.',
      },
      {
        title: 'The phone app reads offline',
        text: 'Flutter on iOS and Android, signed in with a bearer token against the same API, caching each tree to disk so it opens instantly and stays readable with no signal. Editing still needs the network.',
      },
    ],
    build: [
      'Built with Claude Code as the pair, on the same rule as everything else here: the parts worth trusting are the parts under test. About fifty server tests run against a booted Nitro server with a real D1 database — roles, invites, cross-tenant isolation, history recording and restore, the share viewer, GEDCOM — and about forty-five unit tests cover the pure modules the two clients share, including the layout engine.',
      'Running on Cloudflare’s free tier shaped the design rather than the other way round: the share-link unlock budget lives in D1 because adding KV would have meant another storage dependency, and the push notification JWT is signed by hand with WebCrypto because there is no Node crypto at the edge. The code says so in comments — most non-obvious decisions name the alternative that was rejected.',
      'What it deliberately does not have: no email of any kind, no social login, no GEDCOM import, no live collaboration. Those are honest gaps, not a roadmap I am pretending to have finished.',
    ],
    shots: [
      'Three generations on the canvas, laid out automatically — built in the browser without an account.',
      'The Bengali landing page: the whole product exists twice, and says plainly that there is no card and no paid tier.',
    ],
  },
];
