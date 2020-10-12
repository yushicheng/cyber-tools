

module.exports = ({ loaderIgnore }) => ([{
  loader: require.resolve('file-loader'),
  exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.(css|scss|less)$/, /\.html$/, /\.json$/].concat(loaderIgnore),
  options: {
    name: "resources/[hash:8].[ext]"
  }
}])