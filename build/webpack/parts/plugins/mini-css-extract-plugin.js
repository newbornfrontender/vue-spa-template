'use strict';

import { getContentHash as contentHash } from '../modules/utils';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default ({ filename } = {}) => ({
  plugins: [
    new MiniCssExtractPlugin({
      filename: filename || `./[name]${contentHash}.css`,
    }),
  ],
});
