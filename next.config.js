/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === "production";
const repoName = "Portfolio-main"; // Change this to your GitHub repo name

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  basePath: isGithubPages ? `/${repoName}` : "",
  images: {
    unoptimized: true, // Required for Next.js static export
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      };
    }
    return config;
  },
};

module.exports = nextConfig;