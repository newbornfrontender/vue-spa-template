'use strict';

// import { getWebpackConf as keyreader } from '../../modules/keyreader';

import HtmlWebpackPlugin from 'html-webpack-plugin';

// const options = keyreader('template-engines');

// const pug = options.pug();
// const haml = options.haml();
// const hbs = options.hbs();

// export default ({ filename, template, title, viewport } = {}) => ({
//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: filename || './index.html',
//       template: template || './templates/index.html',
//       title: title || 'VueJs + Webpack 4 template',
//       meta: {
//         viewport: viewport || 'width=device-width, initial-scale=1.0',
//       },
//       inject: pug || haml || hbs ? false : true,
//     }),
//   ],
// });

// const config = ({
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './templates/index.html',
//       filename: 'index.html',
//       inject: true,
//     }),
//   ],
// });

// export default config;

const projectName = 'test';

export default ({ filename, template, title, viewport } = {}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      // template: template || './templates/index.html',
      template: template || `./projects/${projectName}/public/templates/index.html`,
      filename: filename || 'index.html',
      title: title || 'VueJs + Webpack 4 template',
      meta: {
        viewport: viewport || 'width=device-width, initial-scale=1.0',
      },
      inject: true,
    }),
  ],
});
