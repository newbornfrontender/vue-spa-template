'use strict';

import { getOptionsConfig as optionsConfig } from '../modules/keyreader';

// const optimizationConfig = optionsConfig.optimization;
// const optimizType = optimizationConfig.splitChunks.name;
// const optimizType = optionsConfig.optimization.splitChunks.name;
const optimizType = 'preset';

let config;

const normalConfig = ({ name, filename } = {}) => ({
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name,
          filename,
          chunks: 'all',
        },
      },
    },
  },
});

const presetConfig = ({
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
});

switch (optimizType) {
  case 'normal':
    config = normalConfig;
    break;

  case 'preset':
    config = presetConfig;
    break;
};

export default config;
