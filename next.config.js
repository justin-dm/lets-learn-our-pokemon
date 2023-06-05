/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com','assets.pokemon.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/browse',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
