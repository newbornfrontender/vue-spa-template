'use strict';

import {
  getResolvePath as resolve,
  getContentHash as contentHash,
} from '../modules/utils';

export default ({ filename, chunkFilename, path } = {}) => ({
  output: {
    filename: filename || `./[name]${contentHash}.js`,
    chunkFilename: chunkFilename || `./[name]${contentHash}.js`,
    path: path || resolve('./dist/'),
  },
});
