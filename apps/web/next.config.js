/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = (phase, { defaultConfig }) => {
  const config = {
    ...defaultConfig,
    ...nextConfig,
  }

  return config
}
