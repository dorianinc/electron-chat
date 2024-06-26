const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Adjust entry point as per your project structure
  devtool: 'inline-source-map', // Source map for better debugging
  target: 'electron-renderer', // Target electron-renderer for Electron compatibility
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { esmodules: true } }],
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new Dotenv(), // Load environment variables from .env file
  ],
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'webpack-app.js',
    path: path.resolve(__dirname, 'build'),
  },
};