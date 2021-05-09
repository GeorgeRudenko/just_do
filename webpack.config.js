// Rules
module.rules = [
  {
    test: /\.pug$/,
    loader: 'pug-plain-loader'
  },
  {
    test: /\.styl$/,
    loader: 'stylus-loader',
    options: {
      webpackImporter: true,
    },
  },
]
