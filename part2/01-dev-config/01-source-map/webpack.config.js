const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    clean: true
  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      }
    ]
  }
}