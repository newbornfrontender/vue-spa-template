'use strict';

// Утилиты
// -----------------------------------------------------------------------------

import {
  getAssetsPath as assets,
  getHash as hash,
} from '../modules/utils';

// Webpack плагины
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// Webpack части: ./*
// -----------------------------------------------------------------------------

import mode from '../parts/mode';
import entry from '../parts/entry';
import resolve from '../parts/resolve';

// Webpack части: ./module/rules/*
// -----------------------------------------------------------------------------

import eslintLoader from '../parts/module/rules/eslint-loader';
import vueLoader from '../parts/module/rules/vue-loader';
import htmlLoader from '../parts/module/rules/html-loader';
import cssLoader from '../parts/module/rules/css-loader';
import stylusLoader from '../parts/module/rules/stylus-loader';
import babelLoader from '../parts/module/rules/babel-loader';
import * as fileLoader from '../parts/module/rules/file-loader';

let ejsLoader = {
  rules: require('../parts/module/rules/ejs-loader'),
};

const rules = new WebpackMerge([
  eslintLoader(),
  vueLoader(),
  htmlLoader(),
  ejsLoader.rules(),
  cssLoader(),
  stylusLoader(),
  babelLoader(),
  fileLoader.img(),
  fileLoader.media(),
  fileLoader.fonts(),
]);

// Webpack части: ./module/*
// -----------------------------------------------------------------------------

import noParse from '../parts/module/noParse';

ejsLoader.module = require('../parts/module/ejsLoader');

const module = new WebpackMerge([
  rules,
  // noParse(),
  // ejsLoader.module(),
]);

// Webpack части: ./plugins/*
// -----------------------------------------------------------------------------

import htmlWebpackPlugin from '../parts/plugins/html-webpack-plugin';
import vueLoaderPlugin from '../parts/plugins/vue-loader-plugin';
import copyWebpackPlugin from '../parts/plugins/copy-webpack-plugin';

const plugins = new WebpackMerge([
  vueLoaderPlugin,
  htmlWebpackPlugin(),
  // copyWebpackPlugin,
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



// =============================================================================
// =============================================================================
// =============================================================================



// +-------+-------------------------------------------------------------------+
// | Title | ejsLoader                                                         |
// +-------+-------------------------------------------------------------------+
// | Notes | Different paths:                                                  |
// |       | '../parts/module/rules/ejs-loader' / '../parts/module/ejsLoader'  |
// +-------+-------------------------------------------------------------------+

// Rules
// -----------------------------------------------------------------------------

// const ejsLoader = (path) => require(path);

// const rules = new WebpackMerge([
//   ejsLoader('../parts/module/rules/ejs-loader')(),
// ]);

// // OR

// let rulesInner = [
//   // ...
// ];

// rulesInner.push(
//   require('../parts/module/rules/ejs-loader')(),
// )

// const rules = new WebpackMerge([ rulesInner ]);

// // Module
// // -----------------------------------------------------------------------------

// // ...
