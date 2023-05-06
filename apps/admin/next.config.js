/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/admin',
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  transpilePackages: ["ui"],
};
