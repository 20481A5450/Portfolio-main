/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Required since image optimization requires a server
  },
};

module.exports = nextConfig;
