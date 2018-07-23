'use strict';

import { resolve } from '../../modules/utils';

import CopyWebpackPlugin from 'copy-webpack-plugin';

const projectName = 'test';

export default ({
  plugins: [
    new CopyWebpackPlugin([
      {
        // from: resolve('static/robots.txt'),
        from: resolve(`projects/${projectName}/public/robots.txt`),
        // to: resolve('dist'),
        to: resolve(`projects/${projectName}/dist`),
        toType: 'dir',
      },
      {
        from: resolve(`projects/${projectName}/public/favicon.ico`),
        to: resolve(`projects/${projectName}/dist`),
        toType: 'dir',
      },
    ]),
  ],
});
