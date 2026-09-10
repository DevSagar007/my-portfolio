const config = {
  plugins: {
    // Tailwind v4 bundles @import inlining, nesting and vendor prefixing, so
    // postcss-import and autoprefixer are no longer part of the pipeline.
    '@tailwindcss/postcss': {},
  },
};

export default config;
