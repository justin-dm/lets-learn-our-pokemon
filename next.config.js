/** @type {import('next').NextConfig} */
const nextConfig = {
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
