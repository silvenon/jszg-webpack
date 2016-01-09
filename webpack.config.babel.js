import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        loaders: ['url?limit=10000&name=[name].[ext]']
      }
    ]
  }
};
