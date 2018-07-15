'use strict';

import utils from '../modules/utils';

export default ({ extensions, alias } = {}) => ({
  resolve: {
    extensions: extensions || [ '.json', '.js', '.vue' ],
    alias: alias || {
      'assets': utils.join('./assets/'),
      'pages': utils.join('./src/pages/'),
      'static': utils.join('./static/'),
      'components': utils.join('./src/components/'),
    },
  },
});
