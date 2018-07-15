'use strict';

// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// -----------------------------------------------------------------------------

import baseConfig from './webpack.conf.common';

// -----------------------------------------------------------------------------

import devServer from './parts/dev-server';

// -----------------------------------------------------------------------------

import hotModuleReplacementPlugin from '../parts/plugins/hot-module-replacement-plugin';

const plugins = new WebpackMerge([
  hotModuleReplacementPlugin,
]);

// -----------------------------------------------------------------------------

const devConfig = new WebpackMerge([
  devServer(),
  plugins,
]);

// -----------------------------------------------------------------------------

export default new WebpackMerge([ baseConfig, devConfig ]);
