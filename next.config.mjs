/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export plain HTML so the site can be served by GitHub Pages.
  output: 'export',
  // This repository is published as a GitHub Pages project site rather than
  // at the account root.
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
  trailingSlash: true,
  images: {
    // The markup uses plain <img> tags, so the optimizer is not needed (and
    // would not run on a static export anyway).
    unoptimized: true,
  },
};

export default nextConfig;
