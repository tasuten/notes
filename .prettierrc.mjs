/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        printWidth: 120,
        useTabs: false,
        singleQuote: true,
        astroSkipFrontmatter: true,
      },
    },
  ],
};
