/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  reactStrictMode: true,
  images: {
    unoptimized: true, // Fixes Next.js Image issue for static exports
  },
};

module.exports = nextConfig;
