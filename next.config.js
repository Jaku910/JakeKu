/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Since we're doing static export, we need to disable features that require a Node.js server
  trailingSlash: true, // This helps with static hosting
}

module.exports = nextConfig 