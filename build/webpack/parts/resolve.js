'use strict';

import { join } from '../modules/utils';

const projectName = 'test';

export default ({ extensions, alias } = {}) => ({
  resolve: {
    extensions: extensions || [ '.js', '.vue', '.json' ],
    alias: alias || {
      // 'assets': join(`assets`),
      // 'pages': join(`src/pages`),
      // 'static': join(`static`),
      // 'components': join(`src/components`),
      'assets': join(`projects/${projectName}/src/assets`),
      'pages': join(`projects/${projectName}/src/pages`),
      'static': join(`projects/${projectName}/public/static`),
      'components': join(`projects/${projectName}/src/components`),
    },
  },
});
