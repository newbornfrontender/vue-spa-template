'use strict';

import { getWebpackConf as keyreader } from '../modules/keyreader';

const options = keyreader('optimization');
const optimizType = options.splitChunks.name();

let config;

switch (optimizType) {
  case 'normal':
    return config = ({ name, filename } = {}) => ({
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

  case 'preset':
    return config = ({
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
};

export default config;
