/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Portfolio-main", 
  // Add Cloudflare Workers configuration
  experimental: {
    // runtime: 'edge',
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
    }
    return config
  },
}

module.exports = nextConfig
