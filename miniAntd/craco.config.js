const path = require("path");
const CracoLessPlugin = require("craco-less");
const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  plugins: [
    /* less */
    {
      plugin: CracoLessPlugin,
    },
  ],
  webpack: {
    /* 别名 */
    alias: {
      "@": resolve("src"),
    },
  },
};