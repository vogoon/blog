/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.ghost.org',
            port: '',
            pathname: '/v4.0.0/images/**',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
