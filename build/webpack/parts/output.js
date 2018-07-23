'use strict';

import { resolve, contentHash } from '../modules/utils';

const dir = 'test';

export default ({ filename, chunkFilename, path } = {}) => ({
  output: {
    filename: filename || `scripts/[name]${contentHash()}.js`,
    chunkFilename: chunkFilename || `scripts/[name]${contentHash()}.js`,
    path: path || resolve(`projects/${dir}/dist`),
  },
});
