'use strict';

import { resolve } from '../../modules/utils';

import CopyWebpackPlugin from 'copy-webpack-plugin';

const dir = 'test';

export default ({
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve(`projects/${dir}/public/robots.txt`),
        to: resolve(`projects/${dir}/dist`),
        toType: 'dir',
      },
      {
        from: resolve(`projects/${dir}/public/favicon.ico`),
        to: resolve(`projects/${dir}/dist`),
        toType: 'dir',
      },
    ]),
  ],
});
