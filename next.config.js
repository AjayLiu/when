const withTM = require("next-transpile-modules")(["react-timezone-select"]);

module.exports = withTM({
  webpack5: false, // you want to keep using Webpack 4
});
