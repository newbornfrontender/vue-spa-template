'use strict';

// Webpack плагины
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// Базовая конфигурация webpack
// -----------------------------------------------------------------------------

import baseConfig from './common';

// Webpack части: <dir>/<parts>
// -----------------------------------------------------------------------------

import devServer from './parts/dev-server';

// Webpack части: <dir>/plugins/<parts>
// -----------------------------------------------------------------------------

import hotModuleReplacementPlugin from '../parts/plugins/hot-module-replacement-plugin';

const plugins = new WebpackMerge([
  hotModuleReplacementPlugin,
]);

// Development конфигурация webpack
// -----------------------------------------------------------------------------

const devConfig = new WebpackMerge([
  devServer(),
  plugins,
]);

// Конфигурация
// -----------------------------------------------------------------------------

export default new WebpackMerge([ baseConfig, devConfig ]);
