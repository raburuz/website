const { withContentlayer } = require("next-contentlayer"); 

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = withContentlayer(nextConfig);