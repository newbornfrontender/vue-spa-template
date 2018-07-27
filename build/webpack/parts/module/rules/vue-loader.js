'use strict';

export default ({ test } = {}) => ({
  module: {
    rules: [
      {
        test: test || /\.vue$/,
        // include,
        // exclude,
        use: 'vue-loader',
      },
    ],
  },
});
