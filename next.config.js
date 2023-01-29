/** @type {import('next').NextConfig} */
const dotEnv = require('dotenv').config()
const nextConfig = {
  reactStrictMode: true,
  env: dotEnv.parsed,
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
