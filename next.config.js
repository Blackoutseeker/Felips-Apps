/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    localeDetection: true,
    defaultLocale: 'en-US',
    locales: ['en-US', 'pt-BR']
  }
}

module.exports = nextConfig
