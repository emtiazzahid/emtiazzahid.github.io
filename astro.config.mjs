// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { SITE } from './src/consts.js';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  // GitHub Pages serves directory URLs and 301s /about to /about/, so every
  // internal link, canonical, and sitemap entry uses the trailing slash form.
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Light-only theme: the site has no dark mode, and a single theme keeps
      // the generated HTML free of duplicate colour attributes.
      theme: 'github-light',
      wrap: false,
    },
  },
  build: {
    // Emit /writing/slug/index.html so URLs stay extensionless on GitHub Pages.
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
