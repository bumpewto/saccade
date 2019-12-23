const withTM = require("next-transpile-modules");

// https://www.npmjs.com/package/next-transpile-modules
module.exports = withTM({
  transpileModules: ["@saccade/components"]
});
