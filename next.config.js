/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === "production";
const repoName = "Portfolio-main"; // Change this to your GitHub repo name

const nextConfig = {
  output: "export",  // ✅ Required for GitHub Pages static export
  reactStrictMode: true,
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  basePath: isGithubPages ? `/${repoName}` : "",
  images: {
    unoptimized: true, // ✅ Required for Next.js static export
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }; // ✅ Prevents Node.js modules from breaking export
    return config;
  },
};

module.exports = nextConfig;
