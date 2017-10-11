const path = require('path');

const { browserslist: browsers } = require('./package.json');

module.exports = {
  entry: path.join(__dirname, 'source', 'js', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                // package.jsonで指定したbrowserslistを利用する
                targets: { browsers },
                // babel-polyfillのうちbrowserslistを踏まえて必要なものだけ読み込む
                useBuiltIns: true,
                // productionの場合tree shakingを有効化
                modules: process.env.NODE_ENV === 'production' ? false : 'commonjs',
                // developmentの際にデバッグ情報を出力する
                debug: process.env.NODE_ENV === 'development'
              }],
              'react'
            ],
            plugins: [
              'transform-object-rest-spread'
            ],
            cacheDirectory: true,
            babelrc: false
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  devServer: {
    publicPath: '/',
    port: 3000,
    historyApiFallback: true
  }
};
