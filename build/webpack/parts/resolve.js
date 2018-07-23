'use strict';

import { join } from '../modules/utils';

export default ({ extensions, alias } = {}) => ({
  resolve: {
    extensions: extensions || [ '.js', '.vue', '.json' ],
    alias: alias || {
      'assets': join('assets'),
      'pages': join('src/pages'),
      'static': join('static'),
      'components': join('src/components'),
    },
  },
});
