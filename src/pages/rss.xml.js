import rss from '@astrojs/rss';

import { SITE } from '../consts.js';
import { getPosts } from '../lib/posts';

export async function GET(context) {
  const posts = await getPosts();

  return rss({
    title: `${SITE.title} — Writing`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.lede,
      pubDate: post.data.date,
      link: `/writing/${post.id}/`,
    })),
    customData: `<language>en-us</language><managingEditor>${SITE.email} (${SITE.author})</managingEditor>`,
  });
}
