'use strict';

import { join } from '../modules/utils';

const HOST = process.env.HOST;
const PORT = process.env.PORT;

export default ({ host, port } = {}) => ({
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    // https: true,
    contentBase: join('dist'),
    compress: true,
    // stats: "errors-only",
    host: host || HOST || 'localhost',
    port: port || PORT || '8080',
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: true,
    },
  },
});
