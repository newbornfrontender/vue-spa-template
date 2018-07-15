'use strict';

// -----------------------------------------------------------------------------

import {
  getResolvePath as resolve,
  getContentHash as contentHash,
} from '../modules/utils';

// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// -----------------------------------------------------------------------------

import baseConfig from './webpack.conf.common';

// -----------------------------------------------------------------------------

import output from './parts/output';
import optimization from './parts/optimization';

// -----------------------------------------------------------------------------

import dynamicCdnWebpackPlugin from './parts/plugins/dynamic-cdn-webpack-plugin';
import miniCssExtractPlugin from './parts/plugins/mini-css-extract-plugin';

const plugins = new WebpackMerge([
  optimization,
  key.cdn ?
    dynamicCdnWebpackPlugin :
    miniCssExtractPlugin(),
]);

// -----------------------------------------------------------------------------

const prodConfig = new WebpackMerge([
  output(),
  plugins
]);

// -----------------------------------------------------------------------------

export default new WebpackMerge([ baseConfig, prodConfig ]);
