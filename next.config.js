/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Since we're doing static export, we need to disable features that require a Node.js server
  trailingSlash: true, // This helps with static hosting
  basePath: '/JakeKu',
  // Disable features that require a Node.js server
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
}

module.exports = nextConfig 