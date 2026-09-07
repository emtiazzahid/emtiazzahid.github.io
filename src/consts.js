/**
 * Single source of truth for site-wide values.
 * Imported by astro.config.mjs, page metadata, the RSS feed, and the footer.
 */
export const SITE = {
  /** Absolute origin, no trailing slash. Change this if the domain changes. */
  url: 'https://emtiazzahid.github.io',
  title: 'Emtiaz Zahid',
  tagline: 'Software Engineer',
  /** Used as the <title> on the home page and as the RSS channel title. */
  defaultTitle: 'Emtiaz Zahid — Software Engineer',
  description:
    'Emtiaz Zahid — software engineer in Dhaka. Notes on Laravel, Vue, WordPress, and the practice of building software.',
  author: 'Emtiaz Zahid',
  locale: 'en',
  location: 'Dhaka, Bangladesh · GMT+6',
  email: 'emtiazzahid@gmail.com',
  github: 'https://github.com/emtiazzahid',
  /** Replace with your real scheduling link. */
  bookingUrl: 'https://cal.com/emtiazzahid/30min',
  /** Number of posts listed under "Latest writing" on the home page. */
  postsOnHome: 3,
};

/** Nav entries. "Work" gets added here when the projects page lands. */
export const NAV = [
  { href: '/writing/', label: 'Writing' },
  { href: '/plugins/', label: 'Plugins' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
