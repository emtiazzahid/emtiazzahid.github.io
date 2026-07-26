import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    /** Publication date. Written as YYYY-MM-DD in frontmatter. */
    date: z.coerce.date(),
    /** The 19px muted line under the post title, and the meta description. */
    lede: z.string(),
    /** Drafts build locally but are excluded from the production site. */
    draft: z.boolean().default(false),
    /** Optional override for the computed "N min read". */
    readingTime: z.number().optional(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { writing };
