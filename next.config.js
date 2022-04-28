/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    localeDetection: true,
    defaultLocale: 'en-US',
    locales: ['en-US', 'pt-BR']
  },
  env: {
    LINKEDIN_PROFILE_URL: process.env.LINKEDIN_PROFILE_URL,
    GOOGLE_PLAY_PROFILE_URL: process.env.GOOGLE_PLAY_PROFILE_URL,
    GITHUB_PROFILE_URL: process.env.GITHUB_PROFILE_URL
  }
}

module.exports = nextConfig
