/** @type {import('next').NextConfig} */
const nextConfig = {
  // Every page is fully static, so `output: 'export'` here turns `next build`
  // into a plain folder of HTML for GitHub Pages or any static host. For a
  // project site served from https://<user>.github.io/my-portfolio/, also set
  // `basePath` and `assetPrefix` to '/my-portfolio'.
  images: {
    // The markup uses plain <img> tags, so the optimizer is not needed (and
    // would not run on a static export anyway).
    unoptimized: true,
  },
};

export default nextConfig;
