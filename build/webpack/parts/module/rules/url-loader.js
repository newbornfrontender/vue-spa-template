'use strict';

import { assets, hash } from '../../../modules/utils';

export default {
  img: ({ test, name, limit } = {}) => ({
    module: {
      rules: [
        {
          test: test || /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          // include,
          // exclude,
          use: {
            loader: 'url-loader',
            options: {
              limit: limit || 10000,
              name: name || assets(`img/[name]${hash()}.[ext]${hash({
                prefix: '?',
              })}`),
            },
          },
        },
      ],
    },
  }),

  cmedia: ({ test, name, limit } = {}) => ({
    module: {
      rules: [
        {
          est: test || /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          // include,
          // exclude,
          use: {
            loader: 'url-loader',
            options: {
              limit: limit || 10000,
              name: name || assets(`media/[name]${hash()}.[ext]${hash({
                prefix: '?',
              })}`),
            },
          },
        },
      ],
    },
  }),

  fonts: ({ test, name, limit } = {}) => ({
    module: {
      rules: [
        {
          test: test || /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          // include,
          // exclude,
          use: {
            loader: 'url-loader',
            options: {
              limit: limit || 10000,
              name: name || assets(`fonts/[name]${hash()}.[ext]${hash({
                prefix: '?',
              })}`),
            },
          },
        },
      ],
    },
  }),
};
