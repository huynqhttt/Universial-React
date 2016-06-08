const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const buildPath = path.resolve(__dirname, 'public');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const hook = require('css-modules-require-hook');

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

module.exports = {
  devtool: 'eval',                                  
  entry: [                    
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    path.join(process.cwd(), 'client-render.js')
  ],
  output: {
    path: buildPath,
    filename: 'build.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      nodeModulesPath
    ]
  },
  module: {
    loaders: [
      { 
        test: /\.json$/, 
        loader: 'json-loader' 
      },
      {
        test: /(\.js|\.jsx)$/,
        loaders: ['react-hot', 'babel'],
        exclude: [nodeModulesPath]
      }, 
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'),
    new ExtractTextPlugin('main.css', { allChunks: true }),  // compiled css (single file only)
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
