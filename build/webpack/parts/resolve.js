'use strict';

import { join } from '../modules/utils';

const dir = 'test';

export default ({ extensions, alias } = {}) => ({
  resolve: {
    extensions: extensions || [ '.js', '.vue', '.json' ],
    alias: alias || {
      'assets': join(`projects/${dir}/src/assets`),
      'pages': join(`projects/${dir}/src/pages`),
      'static': join(`projects/${dir}/public/static`),
      'components': join(`projects/${dir}/src/components`),
    },
  },
});
