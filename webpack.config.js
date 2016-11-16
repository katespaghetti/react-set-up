var path = require('path');

// Plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
  	// this is where webpack will start looking. starting point of website
    app: ['./app.js']
  },

  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:8080/'
  },

  devServer : {
    port: 8080
  },

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body'
    })
  ],

  module: {

    rules: [
      /* preloaders */
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   use: 'eslint-loader',
      //   exclude: /node_modules/,
      // },

      /* loaders */
      {
        test: /\.js/,
        use: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader?sourceMap', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader?sourceMap', 'css-loader', 'sass-loader']
      }
    ]
  }
};