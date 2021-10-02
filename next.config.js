/**
 * @type {import('next').NextConfig}
 */

const withImages = require('next-images');
module.exports = withImages({
  images: {
    disableStaticImages: true,
    domains: ['localhost:3000', '127.0.0.1', 'bibot.ir'],
  },
  env: {
    PUBLIC_URL: '',
  },
});
