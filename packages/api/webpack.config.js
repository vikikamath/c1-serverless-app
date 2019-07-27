'use strict';

const glob = require('glob');
const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const pathPrefix = path.resolve(__dirname);
const entriesArr = glob.sync(`${pathPrefix}/src/routes/**/*.js`);

const entriesMap = entriesArr.reduce((_map, entry) => {
  _map[entry.replace(`${pathPrefix}/src/routes`, '').replace('.js', '')] = entry;
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
     * 
     * TODO: Check if https://github.com/awslabs/serverless-application-model/blob/master/examples/2016-10-31/api_swagger_cors/template.yaml works for standalone swagger.yaml
     */
    // new CopyPlugin([{
    //   from: `${pathPrefix}/swagger.yaml`,
    // }]),
  ]
}