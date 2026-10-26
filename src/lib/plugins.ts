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

/**
 * Only plugins that are live or already submitted are listed. Unreleased ones
 * stay in the gitignored unreleased/ folder (entries in unreleased/plugins.ts,
 * artwork in unreleased/public/plugins/<slug>/) until they are submitted, so
 * their names cannot be taken first. Move an entry back here when it is.
 */
export const PLUGINS: Plugin[] = [
  {
    slug: 'launchmender',
    name: 'Launchmender',
    fullName: 'Launchmender – Go-Live Checklist & Client Handoff',
    tagline:
      'Website launch checklist with 44 automated checks and one-click fixes, a manual checklist, client help docs and a printable handoff report.',
    version: '1.0.2',
    requiresWp: '6.4',
    requiresPhp: '7.4',
    status: 'live',
    intro: [
      'Every WordPress launch has the same forgotten details: "Discourage search engines" still ticked, WP_DEBUG on, a Hello World post, lorem ipsum in a footer, the admin email pointing at the developer. Launchmender checks all of them from inside wp-admin and fixes most of them with one click.',
      'After launch it becomes the handoff: a manual checklist with assignees, a Help screen with your own documentation for the client, a welcome panel on their dashboard, a simplified menu for the client role, and a printable report you can attach to the invoice.',
    ],
    features: [
      { title: '44 automated checks', text: 'Visibility and SEO, content hygiene, configuration, maintenance and security basics, email and forms, performance. Grouped by category with a pass, warn, fail or skipped state and a "Why?" for each.' },
      { title: 'One-click fixes', text: 'Enable indexing, trash the sample content, clear the tagline, set pretty permalinks, disable the file editor and more, each confirmed before it runs.' },
      { title: 'Manual checklist', text: 'The items no script can verify, with assignees, due dates, notes and drag-and-drop ordering. Ships with a template you can replace with your own.' },
      { title: 'Client handoff', text: 'A Help menu with your documentation (imports from WP Help), a welcome panel, contextual tips on edit screens, and a client role that hides the menus they should not touch.' },
      { title: 'Printable report', text: 'Site facts, every check with its result, the manual list and the plugin inventory, as a print-ready page or a time-limited share link.' },
      { title: 'WP-CLI', text: 'wp launchmender check run --format=json exits non-zero on failures, so deployments can be gated on it.' },
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
    version: '1.1.0',
    requiresWp: '6.4',
    requiresPhp: '7.4',
    status: 'live',
    intro: [
      '"The site was fine yesterday." Faultwright shows you what broke, when it started, which plugin is probably responsible, and what to do about it. No external account, no developer required.',
      'Errors are grouped into issues, attributed to the plugin or theme that raised them, and shown on the same timeline as plugin activations, updates and settings changes, so the cause is usually one line above the effect.',
    ],
    features: [
      { title: 'PHP errors', text: 'Fatals, uncaught exceptions and warnings with file, line and a trimmed stack trace. An optional one-file early loader catches fatals raised while other plugins start up.' },
      { title: 'JavaScript errors', text: 'A 1.5 KB collector with no cookies or dependencies reports browser errors, attributed to the plugin or theme that shipped the script. Extension noise is filtered out.' },
      { title: 'Cron health', text: 'A dead WP-Cron, overdue events, events whose plugin was removed, and scheduled jobs that crash.' },
      { title: 'Email and update failures', text: 'Every wp_mail failure and SMTP-plugin error, plugin, theme and core updates that could not be installed, and plugins that crash on activation.' },
      { title: 'Plain-English explanations', text: 'Each issue gets what it means, the likely cause, what to try and when to call a developer or the host. Optional AI explanations for anything unmatched, through the AI provider connected in WordPress 7.0+ or your own API key.' },
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
    slug: 'stalemender',
    name: 'Stalemender',
    fullName: 'Stalemender – Content Audit, Stale Post Finder & Content Decay Report',
    tagline:
      'Scores every post for staleness, thin content, orphan pages and lost Search Console traffic, then hands you a prioritised list of what to refresh.',
    version: '1.1.0',
    requiresWp: '6.5',
    requiresPhp: '7.4',
    status: 'live',
    intro: [
      'Old posts quietly lose rankings. Stalemender audits everything you have published, gives each post a Freshness Score from 0 to 100 and tells you why it scored that way, so refreshing content becomes a ranked to-do list instead of guesswork.',
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
    slug: 'waymender',
    name: 'Waymender',
    fullName: 'Waymender – Broken Link Checker, 404 Monitor & Redirects',
    tagline:
      'Finds broken links and images without hammering your server, logs the 404s visitors hit, and fixes both in one click: edit, unlink, redirect, or swap in an archived copy.',
    version: '1.0.0',
    requiresWp: '6.5',
    requiresPhp: '7.4',
    status: 'live',
    intro: [
      'Broken links cost you readers, rankings and trust. Most link checkers either hammer your server and the sites you link to, or leave you with a spreadsheet and no way to fix anything. Waymender does the scanning politely and puts the fix one click away.',
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
    slug: 'anchormender',
    name: 'Anchormender',
    fullName: 'Anchormender – Internal Link Suggestions, Orphan Post Finder & Bulk Internal Linking',
    tagline:
      'Get internal link suggestions as you write, find orphan posts, and add links in bulk. Runs on your server, no limits, optional AI through the WordPress AI connectors or your own key.',
    version: '1.0.1',
    requiresWp: '6.6',
    requiresPhp: '7.4',
    status: 'live',
    intro: [
      'Internal links are the cheapest SEO win there is, and the easiest one to forget. Anchormender builds a small search index of your own content and uses it to suggest links at the moment you are writing, with the sentence that fits and an anchor phrase already picked.',
      'Nothing leaves your server unless you turn on AI reranking, through the provider you connected in WordPress 7.0+ or with your own API key, and even then you see the token estimate first.',
    ],
    features: [
      { title: 'Editor sidebar', text: 'Related posts for the draft you are writing, each with the best-matching sentence and a highlighted anchor. Insert adds the link in place using the editor\'s own link format.' },
      { title: 'Link from other posts', text: 'Find published posts on the same topic that could link to the one you are editing and add the link there without leaving the editor.' },
      { title: 'Link report', text: 'Inbound and outbound internal link counts for every post, orphans and "fewer than 2 inbound" one click away, search, sort and CSV export.' },
      { title: 'Bulk linking', text: 'Pick up to 50 posts per batch, orphans first, review every proposal, apply, and undo a whole batch in one click.' },
      { title: 'Link audit', text: 'Weekly and on demand: links to posts that were unpublished, trashed or deleted, links to noindex pages, over-used anchors and generic ones like "click here".' },
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
    slug: 'repeatwright',
    name: 'Repeatwright',
    fullName: 'Repeatwright – Customer Segments, RFM & Retention for WooCommerce',
    tagline:
      'Customer segments, RFM scores, repeat rate, LTV and cohort retention for WooCommerce, with segment export and one-off emails. Your data stays on your server.',
    version: '1.0.0',
    requiresWp: '6.6',
    requiresPhp: '7.4',
    status: 'live',
    intro: [
      'Repeatwright turns your existing WooCommerce orders into customer intelligence. It groups every customer into one of eleven RFM segments (Champions, Loyal, At Risk, Can\'t Lose, Lost and so on), shows your repeat rate and lifetime value, and lets you act on a segment without exporting to a third-party tool.',
      'Everything is computed from the orders table on your own server. HPOS and legacy order storage are both supported.',
    ],
    features: [
      { title: 'Overview', text: 'Repeat rate, average lifetime value, orders per customer, median days between orders and 90-day active customers. By default the repeat rate is compared with the previous period.' },
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
    slug: 'hoverbuy-sticky-add-to-cart-bar-for-woocommerce',
    name: 'Hoverbuy',
    fullName: 'Hoverbuy – Sticky Add to Cart Bar for WooCommerce',
    tagline:
      'Shows a sticky add to cart bar with image, price, quantity and button once the product page\'s own Add to cart button scrolls away, variable products included.',
    version: '1.0.0',
    requiresWp: '6.6',
    requiresPhp: '7.4',
    status: 'live',
    intro: [
      'When a shopper scrolls past the product\'s own Add to cart button, Hoverbuy slides in a slim bar at the bottom or top of the screen with the product image, name, price, a quantity box and an Add to cart button. It does not need a particular theme: it works from the add-to-cart form WooCommerce prints on the product page.',
      'The bar\'s button does not add anything to the cart by itself. It presses the page\'s own Add to cart button or submits the product\'s own form, so WooCommerce adds exactly what the form holds: the chosen variation, the quantity and any fields other plugins put in the form.',
    ],
    features: [
      { title: 'Appears when it matters', text: 'By default the bar shows once the real Add to cart button has scrolled out of view, or after the visitor scrolls a set distance if you prefer. It can hide while the visitor scrolls up and while a cart drawer or side cart is open.' },
      { title: 'Variable products', text: 'Until a variation is chosen the button reads "Choose options" and takes the shopper back to the product form. After a choice, the bar\'s price and stock status follow the variation, and its quantity box mirrors the form\'s.' },
      { title: 'Position and devices', text: 'At the top it sits below the admin bar and a full-width fixed header; at the bottom it sits above a full-width bar such as a mobile navigation bar. Switch it on or off for desktop, tablet and mobile, with a compact phone layout.' },
      { title: 'Conditions and per-product override', text: 'Show it on all products or only on chosen products, categories, tags or product types, with exclusions that win over inclusions. A Default, Show or Hide box on each product wins over the rules.' },
      { title: 'Design with live preview', text: 'Colours, a soft shadow, the button text and corner radius, and an option to use your theme\'s own button classes, previewed on one of your product pages before you save.' },
      { title: 'Accessible and light', text: 'Every control is reachable by keyboard, the bar never moves focus on its own, and animations are off when reduced motion is requested. One stylesheet and one script without dependencies, loaded only on product pages where the bar is shown.' },
    ],
    screenshots: [
      'The bar at the bottom of a desktop product page: image, name, price, quantity and Add to cart, one click away.',
      'The compact phone layout keeps the image, price and button in a slim bar.',
      'A variable product before a choice: "Choose options" takes the shopper straight back to the options.',
      'Display settings: when the bar appears, where it sits and on which devices.',
      'Conditions: show the bar everywhere or only where it helps, by product, category, tag or type.',
      'Design settings with the live preview, updated before you save.',
    ],
  },
  {
    slug: 'dynafield-custom-field-dynamic-tags-for-elementor',
    name: 'Dynafield',
    fullName: 'Dynafield – Custom Field Dynamic Tags for Elementor',
    tagline:
      'Shows ACF, Secure Custom Fields, Pods, Meta Box and post meta values in free Elementor through dynamic tags for text, links, images, galleries, numbers, colours and dates.',
    version: '1.0.0',
    requiresWp: '6.6',
    requiresPhp: '7.4',
    status: 'live',
    intro: [
      'Dynafield adds a Custom Fields group to the dynamic tags menu of free Elementor, so a Heading, Image, Button, Counter or any other widget setting that takes dynamic text, links, images, galleries, numbers or colours can show a value from ACF, Secure Custom Fields, Pods, Meta Box, post meta, term meta, user meta or a site option. Elementor Pro is not needed.',
      'Each tag has a field picker that lists the custom fields of the source you choose, and most tags have formatting options and a fallback for when the field is empty. Output is escaped for its context, and the plugin makes no requests to other servers.',
    ],
    features: [
      { title: 'Seven tags', text: 'Field (Text), Field (URL), Field (Image), Field (Gallery), Field (Number), Field (Colour) and Field (Date), in their own Custom Fields group.' },
      { title: 'Seven places to read from', text: 'Current post, Post author, Current term, Current user, Options page, Site option and Specific post ID.' },
      { title: 'Field picker', text: 'Lists ACF/SCF field groups, Pods fields, Meta Box fields and the custom field keys used by the post type you are editing, labelled with the field type. You can also type a key by hand.' },
      { title: 'Formatting and fallbacks', text: 'Date and number formats, letter case, a separator for fields with several values, and Before and After text. Empty fields show fallback text, a fallback URL, image or colour; the Gallery tag has no fallback.' },
      { title: 'Links, images and dates', text: 'Page links and post objects give their permalink, email addresses a mailto: link and phone numbers a tel: link. Images can be stored as an ID, an array or a media library URL, and dates as ACF date picker values, Unix timestamps or ISO 8601, shown in the site format, a custom format or as relative time.' },
      { title: 'Protected data', text: 'Keys whose names contain password, token or secret, and keys such as wp_capabilities and session_tokens, are never read by any tag, even when typed by hand. The Site option source reads only option names an administrator lists, by default the site title and tagline.' },
    ],
    screenshots: [
      'Put any custom field in a Heading with the Field (Text) tag: source, field, format and fallback in one panel.',
      'No keys to remember: the field picker lists your ACF field groups with each field\'s type.',
      'Show an image field in the free Image widget with Field (Image), sized by the widget.',
      'Link a Button to the URL stored in a link field.',
      'Format dates your way, or show them as "3 days ago".',
      'See which field plugins were detected and choose what editors may read on the settings page.',
    ],
  },
  {
    slug: 'shipeach-per-product-shipping-for-woocommerce',
    name: 'Shipeach',
    fullName: 'Shipeach – Per Product Shipping for WooCommerce',
    tagline:
      'Charges shipping per product and per variation by country, state or postcode, as its own shipping method or added to your other rates, in the classic and block checkout.',
    version: '1.0.0',
    requiresWp: '6.6',
    requiresPhp: '7.4',
    status: 'review',
    intro: [
      'Shipeach lets you set a shipping cost on each product and each variation, by country, state or postcode, and WooCommerce charges it, either as its own shipping method in your zones or on top of your other shipping methods. It is for stores where shipping depends on the item rather than the cart: furniture, art, plants, bulky or fragile goods, drop-shipped items with supplier-set shipping.',
      'Rates are calculated on the server, so the classic cart and checkout, the block cart and checkout and the Store API all show the same amounts. It does not fetch carrier rates, print labels or pack boxes. Shipeach is an independent plugin and is not affiliated with WooCommerce or Automattic.',
    ],
    features: [
      { title: 'Rules per product and variation', text: 'Country, state and postcode rules with a line cost charged once per cart line and an item cost charged per unit, up to 200 per product. A variation can override the parent product\'s rules with its own.' },
      { title: 'Postcodes like shipping zones', text: 'Exact postcodes, wildcards and ranges, matched with the same WooCommerce function shipping zones use. The most specific matching rule wins: postcode, then state, then country, then any.' },
      { title: 'Per Product Shipping zone method', text: 'Add it to any shipping zone with a title, tax status and default costs for products with per-product shipping on but no rule matching the address, and optionally hide Free Shipping and Local Pickup when it applies.' },
      { title: 'Or added to your other methods', text: 'An option adds each package\'s per-product cost to every other rate offered for the package, such as Flat rate. Free Shipping is never changed, Local Pickup is left unchanged unless you untick that option, and taxes are recalculated for taxable rates.' },
      { title: 'Order breakdown and bulk edit', text: 'The admin order screen shows which product cost what; customers do not see it. Quick edit and bulk edit turn per-product shipping on or off and set the Any country rule costs for one or many products.' },
      { title: 'Tools screen and WP-CLI', text: 'Copy the rules of one product or variation to other products and variations, and see how many products use per-product shipping. WP-CLI commands list, set, import and export rules, with CSV files for import and export.' },
    ],
    screenshots: [
      'Set shipping costs on a product by country, state or postcode, right below the shipping class.',
      'Give a variation its own rules that replace the parent product\'s.',
      'Add "Per Product Shipping" to any shipping zone, with default costs and Free Shipping and Local Pickup hiding.',
      'The cart charges each product\'s shipping, and a mixed cart adds them up in one rate.',
      'Or add per-product costs on top of Flat rate and your other shipping methods.',
      'Copy rules between products and find every product that uses per-product shipping.',
    ],
  },
  {
    slug: 'bloatwright',
    name: 'Bloatwright',
    fullName: 'Bloatwright – Performance Profiler & Site Speed Audit',
    tagline:
      'Measures the PHP time, database queries, front-end assets, autoloaded options and cron load of every plugin on real pages.',
    version: '1.0.0',
    requiresWp: '6.6',
    requiresPhp: '7.4',
    status: 'review',
    intro: [
      'Bloatwright answers one question: which plugins make this site slow, and by how much? Click Run profile and it requests a handful of typical pages from your own server, several times each, with a profiler attached to those requests only, then charges the time, queries and kilobytes to the plugin that caused them.',
      'Pick a plugin and re-run the same pages with it filtered out of the profiling requests only. You see the before and after of every page without deactivating anything for visitors.',
    ],
    features: [
      { title: 'Per-plugin PHP time', text: 'Self time in hook callbacks plus main-file load time, with nested hooks charged to the plugin that did the work, averaged per page.' },
      { title: 'Database queries', text: 'Count and time per plugin with the slowest queries and their caller.' },
      { title: 'Front-end assets', text: 'What each plugin serves on front-end pages, its size, whether it blocks rendering, and libraries loaded twice by different plugins.' },
      { title: 'Autoload and cron', text: 'Autoloaded options and cron events by owner, including cron hooks with no callback attached.' },
      { title: 'Weight score and verdicts', text: 'A relative score from PHP time, query time, render-blocking KB, autoload KB and cron runs per day, plus a plain-language verdict where a rule applies.' },
      { title: 'History, compare, export', text: 'Sessions are kept, a session can be compared with the previous one after an update, and each exports as a self-contained HTML report. Browse-and-profile mode for hosts that block loopback requests.' },
    ],
    screenshots: [
      'Ranked results: weight, PHP time, queries, front-end KB, autoload, cron and verdicts.',
      'Expanded plugin row: PHP per URL, slowest hooks and queries, assets and options.',
      'Try without: the same pages measured with one plugin filtered out.',
      'Autoloaded options by owner.',
      'A session compared with the previous one after an update.',
      'Self-contained HTML export.',
    ],
  },
];
