/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/discover/**.jsx'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
