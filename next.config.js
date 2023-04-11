/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: process.env.NEXT_PUBLIC_UNOPTIMIZED === 'true' ? true : false,
  },
}

module.exports = nextConfig
