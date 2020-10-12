
// gulp-babel的核心配置
module.exports = {
  plugins: [
    [require.resolve("babel-plugin-file-loader"), {
      "context": "",
      "name": "[hash].[ext]",
      "publicPath": "dist/assets",
      "outputPath": "dist/assets",
      "extensions": ["png", "jpg", "jpeg", "gif", "svg"]
    }],
    [require.resolve("babel-plugin-css-modules-transform"), {
      "devMode": true,
      "keepImport": true,
      "extensions": [".less"],
      "generateScopedName": "[name]__[local]___[hash:8]",
      "extractCss": {
        "dir": "./dist/",
        "relativeRoot": "./src/",
        "filename": "[path]/[name].less"
      }
    }]
  ]
};