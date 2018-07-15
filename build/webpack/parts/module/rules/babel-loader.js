'use strict';

export default ({ test } = {}) => ({
  module: {
    rules: [
      {
        test: test || /\.js$/,
        // include,
        // exclude,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false, // ?
          },
        },
      },
    ],
  },
});
