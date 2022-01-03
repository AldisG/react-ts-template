const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

// multiconfig enviorement setup
module.exports = (enviorementVars) => {
  const { env } = enviorementVars; // gonna be dev or prod file
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
}