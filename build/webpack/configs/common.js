'use strict';

// -----------------------------------------------------------------------------

import {
  getAssetsPath as assets,
  getHash as hash,
} from '../modules/utils';

// -----------------------------------------------------------------------------

import mode from '../parts/mode';
import entry from '../parts/entry';
import resolve from '../parts/resolve';

// -----------------------------------------------------------------------------

import eslintLoader from '../parts/module/rules/eslint-loader';
import vueLoader from '../parts/module/rules/vue-loader';
import htmlLoader from '../parts/module/rules/html-loader';
import ejsLoader from '../parts/module/rules/ejs-loader';
import cssLoader from '../parts/module/rules/css-loader';
import stylusLoader from '../parts/module/rules/stylus-loader';
import babelLoader from '../parts/module/rules/babel-loader';
import * as fileLoader from '../parts/module/rules/file-loader';

const rules = new WebpackMerge([
  eslintLoader(),
  vueLoader(),
  htmlLoader(),
  // ejsLoader(),
  cssLoader(),
  stylusLoader(),
  babelLoader(),
  fileLoader.img(),
  fileLoader.media(),
  fileLoader.fonts(),
]);

const module = new WebpackMerge([
  rules,
]);

// -----------------------------------------------------------------------------

import htmlWebpackPlugin from '../parts/plugins/html-webpack-plugin';
import vueLoaderPlugin from '../parts/plugins/vue-loader-plugin';
import copyWebpackPlugin from '../parts/plugins/copy-webpack-plugin';

const plugins = new WebpackMerge([
  vueLoaderPlugin,
  htmlWebpackPlugin(),
  // copyWebpackPlugin,
]);

// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// -----------------------------------------------------------------------------

export default new WebpackMerge([
  mode(),
  entry(),
  resolve(),
  module,
  plugins,
]);
