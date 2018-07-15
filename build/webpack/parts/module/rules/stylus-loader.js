'use strict';

import { getStylesLoaders as loaders } from '../../../modules/utils';

// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// const env = process.env.NODE_ENV;

const components = true;

export default ({ test, path } = {}) => ({
  module: {
    rules: [
      {
        test: test || /\.styl(us)?$/,
        // include,
        // exclude,
        use: [
          // env === 'watch' || 'production'
          //   ? MiniCssExtractPlugin.loader
          //   : 'vue-style-loader',
          loaders(),
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // ?
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                // path: !components ? 'configs/processors/stylus/postcss.config.js' : '', // './', ''
                path: path || stylus.postcss.path('configs/processors/stylus/postcss.config.js'),
                ctx: {
                  autoprefixer: {
                    cascade: false,
                    grid: true,
                  },
                },
              },
            },
          },
          'stylus-loader',
        ],
      },
    ],
  },
});
