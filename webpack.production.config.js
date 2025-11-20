const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "production",
  devServer: { port: 9000 },
  plugins: [
    new WorkboxPlugin.InjectManifest({
      swSrc: "./src/service-worker.js",
      swDest: "service-worker.js",
    }),
  ],
};
