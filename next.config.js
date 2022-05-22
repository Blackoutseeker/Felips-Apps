/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['play-lh.googleusercontent.com']
  },
  i18n: {
    localeDetection: true,
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
    CERTIFICATION_AUTHORITY: process.env.CERTIFICATION_AUTHORITY
  }
}

module.exports = nextConfig
