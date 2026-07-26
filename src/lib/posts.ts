import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'writing'>;

/**
 * Published posts, newest first.
 * Drafts are visible while running `astro dev` and dropped from the build.
 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Groups posts into `[{ year, posts }]`, years descending, posts newest first. */
export function groupByYear(posts: Post[]): { year: number; posts: Post[] }[] {
  const buckets = new Map<number, Post[]>();

  for (const post of posts) {
    const year = post.data.date.getUTCFullYear();
    const bucket = buckets.get(year);
    if (bucket) bucket.push(post);
    else buckets.set(year, [post]);
  }

  return [...buckets.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, posts]) => ({ year, posts }));
}

const DATE_FORMAT = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
  timeZone: 'UTC',
});

/** "Jul 12, 2026" — matches the design's mono date column. */
export function formatDate(date: Date): string {
  return DATE_FORMAT.format(date);
}

/** "2026-07-12" for <time datetime> and structured data. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

const WORDS_PER_MINUTE = 200;

/** Rounds up, floor of 1. Frontmatter `readingTime` wins when present. */
export function readingTime(post: Post): number {
  if (post.data.readingTime) return post.data.readingTime;

  const words = (post.body ?? '')
    .replace(/```[\s\S]*?```/g, ' ') // code blocks aren't read at prose speed
    .replace(/[#>*_`~\-|]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** "Jul 12, 2026 · 6 min read" */
export function postMeta(post: Post): string {
  return `${formatDate(post.data.date)} · ${readingTime(post)} min read`;
}
