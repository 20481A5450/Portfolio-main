/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  
  // Add Cloudflare Workers configuration
  // experimental: {
  //   runtime: 'edge',
  // },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
    }
    return config
  },
  output:"export", // Ensures static export
  basePath: "/Portfolio-main", // Must match your GitHub repository name
  assetPrefix: "/Portfolio-main",
}

module.exports = nextConfig
