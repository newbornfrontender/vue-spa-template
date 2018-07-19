'use strict';

// Утилиты
// -----------------------------------------------------------------------------

import {
  getResolvePath as resolve,
  getContentHash as contentHash,
  getOptionPath as optionPath,
} from '../modules/utils';

// Webpack плагины
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// Базовая конфигурация webpack
// -----------------------------------------------------------------------------

import baseConfig from './common';

// Webpack части: ./*
// -----------------------------------------------------------------------------

import output from '../parts/output';
import optimization from '../parts/optimization';

// Webpack части: ./plugins/*
// -----------------------------------------------------------------------------

import dynamicCdnWebpackPlugin from '../parts/plugins/dynamic-cdn-webpack-plugin';
import miniCssExtractPlugin from '../parts/plugins/mini-css-extract-plugin';

const CDN_PLUGIN = () => {
  const option = optionPath('../../options/webpack/optimization');

  const CDN = option.cdn.enabled;
  const PLUGIN = option.cdn.plugin;

  if (CDN) {
    switch (PLUGIN) {
      case 'dynamic-cdn-webpack-plugin': return dynamicCdnWebpackPlugin;
    };
  };
}

const plugins = new WebpackMerge([
  output,
  CDN_PLUGIN,
  miniCssExtractPlugin(),
]);

// Production конфигурация webpack
// -----------------------------------------------------------------------------

const OPTIMIZATION = () => {
  const option = optionPath('../../options/webpack/optimization');

  const SPLIT_CHUNKS = option.splitChunks.enabled;

  if (SPLIT_CHUNKS) return optimization;
}

const prodConfig = new WebpackMerge([
  output(),
  OPTIMIZATION,
  plugins,
]);

// Конфигурация
// -----------------------------------------------------------------------------

export default new WebpackMerge([ baseConfig, prodConfig ]);
