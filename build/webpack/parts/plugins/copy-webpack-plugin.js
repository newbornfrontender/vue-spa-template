'use strict';

import { resolve } from '../../modules/utils';

import CopyWebpackPlugin from 'copy-webpack-plugin';

export default ({
  plugins: [
    new CopyWebpackPlugin([
      // {
      //   from: resolve('static/img'),
      //   to: resolve('dist/static/img'),
      //   toType: 'dir',
      // },
      {
        from: resolve('static/robots.txt'),
        to: resolve('dist'),
        toType: 'dir',
      },
    ]),
  ],
});
