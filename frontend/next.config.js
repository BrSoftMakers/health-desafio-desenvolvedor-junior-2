/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        pathname: '/images/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn2.thedogapi.com',
        pathname: '/images/**'
      },
      {
        protocol: 'https',
        hostname: '24.media.tumblr.com',
        pathname: '/images/**'
      }
    ]
  }
}

module.exports = nextConfig
