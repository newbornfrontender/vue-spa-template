'use strict';

import { contentHash } from '../../modules/utils';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default ({ filename } = {}) => ({
  plugins: [
    new MiniCssExtractPlugin({
      filename: filename || `styles/[name]${contentHash()}.css`,
    }),
  ],
});
