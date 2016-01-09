import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  plugins: [
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
