'use strict';

import {
  getAssetsPath as assets,
  getHash as hash,
} from '../../../modules/utils';

export default {
  img: ({ test, name } = {}) => ({
    module: {
      rules: [
        {
          test: test || /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          // include,
          // exclude,
          use: {
            loader: 'file-loader',
            options: {
              name: name || assets(`img/[name]${hash}.[ext]?[hash]`),
            },
          },
        },
      ],
    },
  }),

  media = ({ test, name } = {}) => ({
    module: {
      rules: [
        {
          test: test || /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          // include,
          // exclude,
          use: {
            loader: 'file-loader',
            options: {
              name: name || assets(`media/[name]${hash}.[ext]?[hash]`),
            },
          },
        },
      ],
    },
  }),

  fonts = ({ test, name } = {}) => ({
    module: {
      rules: [
        {
          test: test || /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          // include,
          // exclude,
          use: {
            loader: 'file-loader',
            options: {
              name: name || assets(`fonts/[name]${hash}.[ext]?[hash]`),
            },
          },
        },
      ],
    },
  }),
};
