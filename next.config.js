/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Ensures static site export
  trailingSlash: true, // Ensures correct routing for static files
  images: {
    unoptimized: true, // Needed for static export
  },
  experimental: {
    runtime: "edge",
  },
};

module.exports = nextConfig;
