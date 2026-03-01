/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // ✅ ignore ESLint errors during build
  },
};

module.exports = nextConfig;