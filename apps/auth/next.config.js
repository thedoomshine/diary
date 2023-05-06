/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/auth',
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  transpilePackages: ["ui"],
};
