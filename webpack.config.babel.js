import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

let plugins = [
  new ExtractTextPlugin('style.css')
];

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat(
    new webpack.optimize.UglifyJsPlugin()
  );
}

export default {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  plugins,
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
