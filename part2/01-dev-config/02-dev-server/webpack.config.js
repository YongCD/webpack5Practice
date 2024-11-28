const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './app.js',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 3000,
    headers: {
      'X-Custom-Header': 'lin'
    },
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}