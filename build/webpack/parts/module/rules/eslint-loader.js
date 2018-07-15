'use strict';

export default ({ test } = {}) => ({
  module: {
    rules: [
      {
        test: test || /\.(js|vue)$/,
        // include,
        // exclude,
        use: 'eslint-loader',
        enforce: 'pre',
      },
    ],
  },
});
