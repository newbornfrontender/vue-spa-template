'use strict';

// Утилиты
// -----------------------------------------------------------------------------

// import {
//   getResolvePath as resolve,
//   getContentHash as contentHash,
// } from '../modules/utils';

// import { getOptionsConfig as optionsConfig } from '../modules/keyreader';

// const optimizConfig = optionsConfig.optimization;

// Webpack плагины
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// Базовая конфигурация webpack
// -----------------------------------------------------------------------------

import baseConfig from './common';

// Webpack части: <dir>/<parts>
// -----------------------------------------------------------------------------

import output from '../parts/output';
import optimization from '../parts/optimization';

// Webpack части: <dir>/plugins/<parts>
// -----------------------------------------------------------------------------

import dynamicCdnWebpackPlugin from '../parts/plugins/dynamic-cdn-webpack-plugin';
import miniCssExtractPlugin from '../parts/plugins/mini-css-extract-plugin';

// const CDN_PLUGIN = () => {
//   const CDN = optimizConfig.cdn.enabled;
//   const PLUGIN = optimizConfig.cdn.plugin;

//   if (CDN) {
//     switch (PLUGIN) {
//       // case 'dynamic-cdn-webpack-plugin': return dynamicCdnWebpackPlugin;
//       case 'dynamic-cdn-webpack-plugin':
//         dynamicCdnWebpackPlugin;
//         break;
//     };
//   };
// };

const plugins = new WebpackMerge([
  output,
  miniCssExtractPlugin(),

  // CDN_PLUGIN,
]);

// Production конфигурация webpack
// -----------------------------------------------------------------------------

// const OPTIMIZATION = () => {
//   const SPLIT_CHUNKS = optimizConfig.splitChunks.enabled();

//   if (SPLIT_CHUNKS) return optimization;
// };

const prodConfig = new WebpackMerge([
  output(),
  plugins,

  // OPTIMIZATION,
]);

// Конфигурация
// -----------------------------------------------------------------------------

export default new WebpackMerge([ baseConfig, prodConfig ]);
