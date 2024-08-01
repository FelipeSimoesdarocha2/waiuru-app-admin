/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@waiuru/waiuru-ui']);

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en', 'pt', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
};

module.exports = withTM(nextConfig);
