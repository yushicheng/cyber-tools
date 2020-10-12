const babelConfig = require("@cyber-tools/preset-babel-option");

module.exports = ({ loaderIgnore }) => ([{
  exclude: loaderIgnore,
  test: /.(js|jsx)$/,
  use: [{
    loader: require.resolve("babel-loader"),
    options: babelConfig
  }]
}])