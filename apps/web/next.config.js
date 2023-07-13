/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: true,
    mdxRs: true,
  },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
