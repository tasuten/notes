import mdx from '@astrojs/mdx';
// @ts-check
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { unified } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  site: 'https://tasuten.github.io',
  base: '/notes',
  publicDir: './static/',
  trailingSlash: 'always',
  integrations: [mdx()],
  markdown: {
    processor: unified({
      shikiConfig: {
        theme: 'github-light',
      },
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
      remarkRehype: {
        clobberPrefix: '',
      },
    }),
  },
});
