/** @type {import('next').NextConfig} */
const { ADMIN_URL, AUTH_URL  } = process.env

module.exports = {
  async rewrites() {
    return [
      {
        source: '/auth',
        destination: `http://localhost:3001/auth`,
      },
      {
        source: '/auth/:path*',
        destination: `http://localhost:3001/auth/:path*`,
      },
      {
        source: '/admin',
        destination: `http://localhost:3002/admin`
      },
      {
        source: '/admin/:path*',
        destination: `http://localhost:3002/admin/:path*`
      }
    ]
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  transpilePackages: ["ui"],
  env: {
    ADMIN_URL,
    AUTH_URL
  }
};
