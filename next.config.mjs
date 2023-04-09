const defaultLocale = "ko";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  i18n: {
    defaultLocale,
    locales: [defaultLocale],
  },
};

export default config;
