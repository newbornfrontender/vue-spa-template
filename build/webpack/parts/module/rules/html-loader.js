'use strict';

export default ({ test } = {}) => ({
  module: {
    rules: [
      {
        test: test || /\.html$/,
        // include,
        // exclude,
        use: [
          // {
          //   loader: 'underscore-template-loader',
          //   options: {
          //     query: {
          //       interpolate: '\\{\\[(.+?)\\]\\}',
          //       evaluate: '\\{%([\\s\\S]+?)%\\}',
          //       escape: '\\{\\{(.+?)\\}\\}',
          //     },
          //   },
          // },
          'html-loader',
        ],
      },
    ],
  },
});
