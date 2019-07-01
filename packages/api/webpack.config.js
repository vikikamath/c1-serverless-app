'use strict';

const glob = require('glob');
const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

const pathPrefix = path.resolve(__dirname);
const entriesMap = glob.sync(`${pathPrefix}/**/*.js`, {
  ignore: ['**/dist/**', '**/node_modules/**', '**/*.config.js'],
}).reduce((_map, entry) => {
  _map[entry.replace(pathPrefix, '').replace('.js', '')] = entry;
  return _map;
}, {});

module.exports = {
  entry: entriesMap, // required to produce separate output
  target: 'node',
  mode: 'development',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}