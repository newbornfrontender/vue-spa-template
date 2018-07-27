'use strict';

// Утилиты
// -----------------------------------------------------------------------------

// import {  } from '../modules/utils';

// Webpack плагины
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// Webpack части: <dir>/<parts>
// -----------------------------------------------------------------------------

import mode from '../parts/mode';
import entry from '../parts/entry';
import resolve from '../parts/resolve';

// Webpack части: <dir>/module/rules/<parts>
// -----------------------------------------------------------------------------

// import eslintLoader from '../parts/module/rules/eslint-loader';
import vueLoader from '../parts/module/rules/vue-loader';
import htmlLoader from '../parts/module/rules/html-loader';
import cssLoader from '../parts/module/rules/css-loader';
import stylusLoader from '../parts/module/rules/stylus-loader';
import babelLoader from '../parts/module/rules/babel-loader';
// import * as fileLoader from '../parts/module/rules/file-loader';
import fileLoader from '../parts/module/rules/file-loader';

// let ejsLoader = {
//   rules: require('../parts/module/rules/ejs-loader'),
// };

const rules = new WebpackMerge([
  // eslintLoader(),
  vueLoader(),
  htmlLoader(),
  // ejsLoader.rules(),
  cssLoader(),
  stylusLoader(),
  babelLoader(),
  fileLoader.img(),
  fileLoader.media(),
  fileLoader.fonts(),
]);

// Webpack части: <dir>/module/<parts>
// -----------------------------------------------------------------------------

// import noParse from '../parts/module/noParse';

// ejsLoader.module = require('../parts/module/ejsLoader');
// ejsLoader.module: require('../parts/module/ejsLoader');
// ejsLoader.push({
//   module: require('../parts/module/ejsLoader'),
// });

const module = new WebpackMerge([
  rules,
  // noParse(),
  // ejsLoader.module(),
]);

// Webpack части: <dir>/plugins/<parts>
// -----------------------------------------------------------------------------

import htmlWebpackPlugin from '../parts/plugins/html-webpack-plugin';
import vueLoaderPlugin from '../parts/plugins/vue-loader-plugin';
import copyWebpackPlugin from '../parts/plugins/copy-webpack-plugin';

const plugins = new WebpackMerge([
  vueLoaderPlugin,
  htmlWebpackPlugin(),
  copyWebpackPlugin,
]);

// Конфигурация
// -----------------------------------------------------------------------------

export default new WebpackMerge([
  mode(),
  entry(),
  resolve(),
  module,
  plugins,
]);
