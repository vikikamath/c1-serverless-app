'use strict';

const glob = require('glob');
const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const pathPrefix = path.resolve(__dirname);
const entriesArr = glob.sync(`${pathPrefix}/**/*.js`, {
  ignore: ['**/dist/**', '**/node_modules/**', '**/*.config.js'],
});

const entriesMap = entriesArr.reduce((_map, entry) => {
  _map[entry.replace(pathPrefix, '').replace('.js', '')] = entry;
  return _map;
}, {});

console.log(entriesMap);

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
    /**
     * TODO: There are issues with standalone swagger file: https://github.com/awslabs/serverless-application-model/issues/305
     * Until then don't copy
     */
    // new CopyPlugin([{
    //   from: `${pathPrefix}/swagger.yaml`,
    // }]),
  ]
}