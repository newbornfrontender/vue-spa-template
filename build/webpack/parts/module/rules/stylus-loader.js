'use strict';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const env = process.env.NODE_ENV;

const components = true;

export default ({ test, path } = {}) => ({
  module: {
    rules: [
      {
        test: test || /\.styl(us)?$/,
        // include,
        // exclude,
        use: [
          env === 'production' ?
            MiniCssExtractPlugin.loader :
            'vue-style-loader',
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
                path: path || !components ? 'configs/processors/stylus/postcss.config.js' : '',
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
