/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'Portfolio-main'; // Replace with your GitHub repo name

module.exports = {
  output: 'export',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  basePath: isGithubPages ? `/${repoName}` : '',
};

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
};

module.exports = nextConfig;