'use strict';

import { getStylesLoaders as loaders } from '../../../modules/utils';

// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// const env = process.env.NODE_ENV;

export default ({ test } = {}) => ({
  module: {
    rules: [
      {
        test: test || /\.css$/,
        // include,
        // exclude,
        use: [
          // env === 'production'
          //   ? MiniCssExtractPlugin.loader
          //   : 'vue-style-loader',
          // () => {
          //   if (env === 'production') return MiniCssExtractPlugin.loader;
          //   return 'vue-style-loader';
          // },
          loaders(),
          'css-loader',
        ],
      },
    ],
  },
});
