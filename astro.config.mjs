import mdx from '@astrojs/mdx';
// @ts-check
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
  site: 'https://tasuten.github.io',
  base: '/notes',
  publicDir: './static/',
  trailingSlash: 'always',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    remarkRehype: {
      clobberPrefix: '',
    },
  },
});
