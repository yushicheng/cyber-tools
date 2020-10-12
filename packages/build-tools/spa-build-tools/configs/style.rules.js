const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const postcssNodeModuleConfig = require("@/configs/defaultConfig/postcss.node_modules");
const postcssUserConfig = require("@/configs/defaultConfig/postcss.user_config");;

module.exports = ({ loaderIgnore }) => ([{
  exclude: loaderIgnore,
  test: /\.scss$/,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: true,
      reloadAll: true,
      esModule: false
    }
  }, {
    loader: require.resolve("css-loader"),
    options: { modules: true }
  }, {
    loader: require.resolve("postcss-loader"),
    options: postcssUserConfig
  }, {
    loader: require.resolve("sass-loader")
  }]
}, {
  test: /\.scss$/,
  include: loaderIgnore,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: true,
      reloadAll: true,
      esModule: true
    }
  }, {
    loader: require.resolve("css-loader"),
    options: { modules: false }
  }, {
    loader: require.resolve("postcss-loader"),
    options: postcssNodeModuleConfig
  }, {
    loader: require.resolve("sass-loader")
  }]
}, {
  exclude: loaderIgnore,
  test: /\.less$/,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: true,
      reloadAll: true,
      esModule: false
    }
  }, {
    loader: require.resolve("css-loader"),
    options: {
      modules: true
    }
  }, {
    loader: require.resolve("postcss-loader"),
    options: postcssUserConfig
  }, {
    loader: require.resolve("less-loader"),
    options: {}
  }]
}, {
  test: /\.less$/,
  include: loaderIgnore,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: true,
      reloadAll: true,
      esModule: false
    }
  }, {
    loader: require.resolve("css-loader"),
    options: { modules: false }
  }, {
    loader: require.resolve("postcss-loader"),
    options: postcssNodeModuleConfig
  }, {
    loader: require.resolve("less-loader"),
    options: {}
  }]
}, {
  exclude: loaderIgnore,
  test: /\.css$/,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: true,
      reloadAll: true,
      esModule: false
    }
  }, {
    loader: require.resolve("css-loader"),
    options: { modules: true }
  }, {
    loader: require.resolve("postcss-loader"),
    options: postcssUserConfig
  }]
}, {
  test: /\.css$/,
  include: loaderIgnore,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: true,
      reloadAll: true,
      esModule: false
    }
  }, {
    loader: require.resolve("css-loader"),
    options: { modules: true }
  }, {
    loader: require.resolve("postcss-loader"),
    options: postcssNodeModuleConfig
  }]
}])