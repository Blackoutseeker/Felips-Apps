/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'play.google.com'
      }
    ]
  },
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'pt-BR']
  },
  env: {
    LINKEDIN_PROFILE_URL: process.env.LINKEDIN_PROFILE_URL,
    GOOGLE_PLAY_PROFILE_URL: process.env.GOOGLE_PLAY_PROFILE_URL,
    GITHUB_PROFILE_URL: process.env.GITHUB_PROFILE_URL,

    AD_EXCHANGE: process.env.AD_EXCHANGE,
    PUBLISHER_ID: process.env.PUBLISHER_ID,
    RELATIONSHIP_TYPE: process.env.RELATIONSHIP_TYPE,
    CERTIFICATION_AUTHORITY: process.env.CERTIFICATION_AUTHORITY,

    GOOGLE_AD_SENSE_ID: process.env.GOOGLE_AD_SENSE_ID
  },
  rewrites: async () => [
    {
      source: '/app-ads.txt',
      destination: '/api/app-ads'
    }
  ]
}

module.exports = nextConfig
