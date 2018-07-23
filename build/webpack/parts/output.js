'use strict';

import { resolve, contentHash } from '../modules/utils';

const projectName = 'test';

export default ({ filename, chunkFilename, path } = {}) => ({
  output: {
    filename: filename || `scripts/[name]${contentHash()}.js`,
    chunkFilename: chunkFilename || `scripts/[name]${contentHash()}.js`,
    // path: path || resolve('dist'),
    path: path || resolve(`projects/${projectName}/dist`),
  },
});
