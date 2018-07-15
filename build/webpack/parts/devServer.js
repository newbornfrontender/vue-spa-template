'use strict';

import utils from '../modules/utils';

export default ({ host, port } = {}) => ({
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    // https: true,
    contentBase: utils.join('./dist/'),
    compress: true,
    // stats: "errors-only",
    host,
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    publicPath: '/', // './'
    quiet: true,
    watchOptions: {
      poll: true,
    },
  },
});
