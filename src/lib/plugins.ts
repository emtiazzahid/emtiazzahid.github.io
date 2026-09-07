/**
 * WordPress plugins listed under /plugins/. One entry per plugin; the
 * screenshots live in public/plugins/<slug>/ (icon-256x256.png,
 * banner-1544x500.png, screenshot-N.png) and captions are indexed by order.
 */
export type PluginStatus = 'review' | 'live';

export interface Plugin {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  version: string;
  requiresWp: string;
  requiresPhp: string;
  status: PluginStatus;
  intro: string[];
  features: { title: string; text: string }[];
  screenshots: string[];
}

export const wporgUrl = (p: Plugin) => `https://wordpress.org/plugins/${p.slug}/`;

export const statusLabel = (p: Plugin) =>
  p.status === 'live' ? 'Free on WordPress.org' : 'Submitted to WordPress.org · in review';

export const PLUGINS: Plugin[] = [
  {
    slug: 'launchwright',
    name: 'Launchwright',
    fullName: 'Launchwright – Go-Live Checklist & Client Handoff',
    tagline:
      'Website launch checklist with 44 automated checks and one-click fixes, a manual checklist, client help docs and a printable handoff report.',
    version: '1.0.0',
    requiresWp: '6.4',
    requiresPhp: '7.4',
    status: 'review',
    intro: [
      'Every WordPress launch has the same forgotten details: "Discourage search engines" still ticked, WP_DEBUG on, a Hello World post, lorem ipsum in a footer, the admin email pointing at the developer. Launchwright checks all of them from inside wp-admin and fixes most of them with one click.',
      'After launch it becomes the handoff: a manual checklist with assignees, a Help screen with your own documentation for the client, a welcome panel on their dashboard, a simplified menu for the client role, and a printable report you can attach to the invoice.',
    ],
    features: [
      { title: '44 automated checks', text: 'Visibility and SEO, content hygiene, configuration, maintenance and security basics, email and forms, performance. Grouped by category with a pass, warn, fail or skipped state and a "Why?" for each.' },
      { title: 'One-click fixes', text: 'Enable indexing, trash the sample content, clear the tagline, set pretty permalinks, disable the file editor and more, each confirmed before it runs.' },
      { title: 'Manual checklist', text: 'The items no script can verify, with assignees, due dates, notes and drag-and-drop ordering. Ships with a template you can replace with your own.' },
      { title: 'Client handoff', text: 'A Help menu with your documentation (imports from WP Help), a welcome panel, contextual tips on edit screens, and a client role that hides the menus they should not touch.' },
      { title: 'Printable report', text: 'Site facts, every check with its result, the manual list and the plugin inventory, as a print-ready page or a time-limited share link.' },
      { title: 'WP-CLI', text: 'wp launchwright check run --format=json exits non-zero on failures, so deployments can be gated on it.' },
    ],
    screenshots: [
      'The checklist: automated checks grouped by category with one-click fixes.',
      'Manual checklist with assignees, due dates and notes.',
      "The client's Help screen with your documentation.",
      "Welcome panel on the client's Dashboard.",
      'Printable handoff report.',
      'Settings: handoff mode, welcome panel, client role menu and contextual tips.',
    ],
  },
  {
    slug: 'faultwright',
    name: 'Faultwright',
    fullName: 'Faultwright – Error Monitor, Cron & Email Failure Alerts',
    tagline:
      'See every PHP error, JavaScript error, failed cron job, failed email and failed update on one screen, explained in plain English, with what changed before it started.',
    version: '1.0.0',
    requiresWp: '6.4',
    requiresPhp: '7.4',
    status: 'review',
    intro: [
      '"The site was fine yesterday." Faultwright shows you what broke, when it started, which plugin is probably responsible, and what to do about it. No external account, no developer required.',
      'Errors are grouped into issues, attributed to the plugin or theme that raised them, and shown on the same timeline as plugin activations, updates and settings changes, so the cause is usually one line above the effect.',
    ],
    features: [
      { title: 'PHP errors', text: 'Fatals, uncaught exceptions and warnings with file, line and a trimmed stack trace. An optional one-file early loader catches fatals raised while other plugins start up.' },
      { title: 'JavaScript errors', text: 'A 1.5 KB collector with no cookies or dependencies reports browser errors, attributed to the plugin or theme that shipped the script. Extension noise is filtered out.' },
      { title: 'Cron health', text: 'A dead WP-Cron, overdue events, events whose plugin was removed, and scheduled jobs that crash.' },
      { title: 'Email and update failures', text: 'Every wp_mail failure and SMTP-plugin error, plugin, theme and core updates that could not be installed, and plugins that crash on activation.' },
      { title: 'Plain-English explanations', text: 'Each issue gets what it means, the likely cause, what to try and when to call a developer or the host. Optional AI explanations with your own API key for anything unmatched.' },
      { title: 'Notifications and privacy', text: 'Daily digest or instant email for critical issues, retention limits, IP hashing, and a kill switch constant for wp-config.php.' },
    ],
    screenshots: [
      'Issues list: every failure source in one place, grouped, with the likely component.',
      'Issue detail: plain-English explanation, what changed before it started, occurrences and stack trace.',
      'Timeline: errors and changes on one axis.',
      'Cron health: next run, overdue flags, durations and Run now.',
      'Dashboard widget with the 7-day sparkline.',
      'Settings: capture sources, early loader, notifications and privacy.',
    ],
  },
  {
    slug: 'stalewatch',
    name: 'Stalewatch',
    fullName: 'Stalewatch – Content Audit, Stale Post Finder & Content Decay Report',
    tagline:
      'Scores every post for staleness, thin content, orphan pages and lost Search Console traffic, then hands you a prioritised list of what to refresh.',
    version: '1.0.0',
    requiresWp: '6.4',
    requiresPhp: '7.4',
    status: 'review',
    intro: [
      'Old posts quietly lose rankings. Stalewatch audits everything you have published, gives each post a Freshness Score from 0 to 100 and tells you why it scored that way, so refreshing content becomes a ranked to-do list instead of guesswork.',
      'The audit runs in the background in small batches, so it works on shared hosting and on sites with thousands of posts.',
    ],
    features: [
      { title: 'Freshness score per post', text: 'Age since the last update, search traffic trend, outdated mentions, length against the typical post, inbound internal links, structure and meta description, each weighted and explained.' },
      { title: 'Google Search Console', text: 'Clicks in the last 28 days against the 28 before, per URL, through a service account you control.' },
      { title: 'Outdated mentions', text: 'Old years, "this year", "recently" and prices in headings, quoted in context with a per-post ignore list.' },
      { title: 'Link index', text: 'Every internal link on the site, so orphan pages and inbound counts are exact, plus light, cached checks for broken outbound links.' },
      { title: 'Workflow', text: 'Status, assignee, notes and saved views per post; bulk actions; CSV export; an AI refresh brief with a token estimate shown before anything is sent.' },
      { title: 'Dashboard', text: 'Band distribution, average score trend and the "refresh next" list, with a weekly email summary.' },
    ],
    screenshots: [
      'Audit table with freshness scores, reasons, traffic trend, workflow status and filters.',
      'Post drawer: score breakdown per signal, outdated mentions in context, inbound links and notes.',
      'Dashboard: band distribution, average score trend and the "refresh next" list.',
      'Settings: signal weights and thresholds.',
      'Settings: Search Console connection.',
      'AI refresh brief saved as a note, with the token estimate shown before sending.',
    ],
  },
  {
    slug: 'linkmender',
    name: 'LinkMender',
    fullName: 'LinkMender – Broken Link Checker, 404 Monitor & Redirects',
    tagline:
      'Finds broken links and images without hammering your server, logs the 404s visitors hit, and fixes both in one click: edit, unlink, redirect, or swap in an archived copy.',
    version: '1.0.0',
    requiresWp: '6.4',
    requiresPhp: '7.4',
    status: 'review',
    intro: [
      'Broken links cost you readers, rankings and trust. Most link checkers either hammer your server and the sites you link to, or leave you with a spreadsheet and no way to fix anything. LinkMender does the scanning politely and puts the fix one click away.',
      'Links and images in posts, pages, custom post types, custom fields, menus, widgets, term descriptions and page-builder content are collected once and checked in the background with per-host throttling.',
    ],
    features: [
      { title: 'Polite scanning', text: 'Background batches through Action Scheduler, HEAD before GET, per-host rate limits, retries before anything is called broken.' },
      { title: 'Fix in place', text: 'Edit the URL with instant verification, unlink and keep the text, replace a broken image, swap in the closest Wayback Machine copy, or update every occurrence of a redirecting link to its destination.' },
      { title: '404 monitor', text: 'Hit counts, referrers and suggested redirect targets for the URLs visitors actually request.' },
      { title: 'Redirects', text: 'Exact and wildcard rules with hit counts and CSV import/export.' },
      { title: 'Editor sidebar', text: 'Link problems for the post you are editing, fixable without leaving the editor.' },
      { title: 'Page builders', text: 'Elementor, Bricks, Beaver Builder and Divi content is scanned and fixed like everything else.' },
    ],
    screenshots: [
      'Links screen: broken links grouped by URL with where they appear and one-click fixes.',
      'Link detail: edit, unlink, use an archived copy or redirect, with instant verification.',
      '404 log with hit counts, referrers and suggested redirect targets.',
      'Redirects: exact and wildcard rules, hit counts, CSV import/export.',
      'Editor sidebar showing link problems in the post you are editing.',
      'Settings: what to scan, politeness, exclusions, 404 log and notifications.',
    ],
  },
  {
    slug: 'anchorly',
    name: 'Anchorly',
    fullName: 'Anchorly – Internal Link Suggestions, Orphan Post Finder & Bulk Internal Linking',
    tagline:
      'Get internal link suggestions as you write, find orphan posts, and add links in bulk. Runs on your server, no limits, optional AI with your own key.',
    version: '1.0.0',
    requiresWp: '6.4',
    requiresPhp: '7.4',
    status: 'review',
    intro: [
      'Internal links are the cheapest SEO win there is, and the easiest one to forget. Anchorly builds a small search index of your own content and uses it to suggest links at the moment you are writing, with the sentence that fits and an anchor phrase already picked.',
      'Nothing leaves your server unless you turn on AI reranking with your own API key, and even then you see the token estimate first.',
    ],
    features: [
      { title: 'Editor sidebar', text: 'Related posts for the draft you are writing, each with the best-matching sentence and a highlighted anchor. Insert adds the link in place using the editor\'s own link format.' },
      { title: 'Link from older posts', text: 'Find published posts that could link to the one you are editing and add the link there, with a revision, without leaving the editor.' },
      { title: 'Link report', text: 'Inbound and outbound internal link counts for every post, orphans and "fewer than 2 inbound" one click away, search, sort and CSV export.' },
      { title: 'Bulk linking', text: 'Generate proposals for a whole post type, review every one, apply with revisions, undo per post.' },
      { title: 'Existing-link audit', text: 'Links pointing at drafts, trashed or noindex posts, redirect chains and generic anchors like "click here".' },
      { title: 'Classic editor', text: 'The same suggestions in a meta box, and a WP-CLI command for reindexing.' },
    ],
    screenshots: [
      'Suggestions in the block editor sidebar with the matching sentence and anchor.',
      'A link inserted in place, ready to save.',
      'The link report with orphan pages and inbound/outbound counts.',
      'Bulk linking: review every proposal before applying.',
      'The existing-link audit.',
      'AI rerank with a token estimate before anything is sent.',
    ],
  },
  {
    slug: 'repeatiq-for-woocommerce',
    name: 'RepeatIQ for WooCommerce',
    fullName: 'RepeatIQ for WooCommerce',
    tagline:
      'Customer segments, RFM scores, repeat rate, LTV and cohort retention for WooCommerce, with segment export and one-off emails. Your data stays on your server.',
    version: '1.0.0',
    requiresWp: '6.6',
    requiresPhp: '7.4',
    status: 'review',
    intro: [
      'RepeatIQ turns your existing WooCommerce orders into customer intelligence. It groups every customer into one of eleven RFM segments (Champions, Loyal, At risk, Can\'t lose them, Lost and so on), shows your repeat rate and lifetime value, and lets you act on a segment without exporting to a third-party tool.',
      'Everything is computed from the orders table on your own server. HPOS and legacy order storage are both supported.',
    ],
    features: [
      { title: 'Overview', text: 'Repeat rate, average lifetime value, orders per customer, median days between orders and 90-day active customers, with trend against the previous period.' },
      { title: 'RFM grid', text: 'Customer count, revenue and share per segment. Click a tile to see the customers.' },
      { title: 'Customers', text: 'Filter by segment, spend, orders, last order date, country, acquisition source, tag, product, category or coupon. Export CSV, copy emails, add tags, or create a coupon restricted to those customers.' },
      { title: 'Segment builder', text: 'Saved segments with a live count, refreshed on a schedule.' },
      { title: 'Cohort retention', text: 'Monthly acquisition cohorts and how much of each still buys.' },
      { title: 'Segment emails', text: 'One-off emails through the WooCommerce mailer with merge tags, consent summary and unsubscribe handling.' },
    ],
    screenshots: [
      'Overview with KPIs and the RFM segment grid.',
      'Customers list with filters and bulk actions.',
      'Segment builder with live count.',
      'Cohort retention heatmap.',
      'Customer drawer with order timeline and RFM explanation.',
      'Segment email composer with merge tags and consent summary.',
    ],
  },
  {
    slug: 'deadweight',
    name: 'Deadweight',
    fullName: 'Deadweight – Plugin Performance Profiler',
    tagline:
      'Find which plugins slow down your site: PHP time, database queries, front-end weight, autoloaded options and cron load, ranked per plugin with plain-English verdicts.',
    version: '1.0.0',
    requiresWp: '6.4',
    requiresPhp: '7.4',
    status: 'review',
    intro: [
      'Deadweight answers one question: which plugins make this site slow, and by how much? Click Run profile and it requests a handful of typical pages from your own server, several times each, with a profiler attached, then charges every millisecond, query and kilobyte to the plugin that caused it.',
      'Pick a plugin and re-run the same pages with it filtered out of the profiling requests only. You see the before and after without deactivating anything for visitors.',
    ],
    features: [
      { title: 'Per-plugin PHP time', text: 'Self time in hooks and includes, with nested hooks charged to the plugin that did the work, min, average and max across passes.' },
      { title: 'Database queries', text: 'Count and time per plugin with the slowest queries and their caller.' },
      { title: 'Front-end assets', text: 'What each plugin enqueues, its size, whether it blocks rendering, and libraries loaded twice by different plugins.' },
      { title: 'Autoload and cron', text: 'Autoloaded options and cron events by owner, including orphaned cron hooks left behind by removed plugins.' },
      { title: 'Weight score and verdicts', text: 'A relative score from PHP time, query time, render-blocking KB, autoload KB and cron runs per day, plus a plain-language verdict per plugin.' },
      { title: 'History, compare, export', text: 'Sessions are kept, any two can be compared after an update, and a self-contained HTML report can be sent to a client. Browse-and-profile mode for hosts that block loopback requests.' },
    ],
    screenshots: [
      'Ranked results: weight, PHP time, queries, front-end KB, autoload, cron and a verdict per plugin.',
      'Expanded plugin row: PHP per URL, slowest hooks and queries, assets and options.',
      'Try without: the same pages measured with one plugin filtered out.',
      'Autoloaded options by owner.',
      'Compare two sessions after an update.',
      'Self-contained HTML export.',
    ],
  },
];
