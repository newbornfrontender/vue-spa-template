'use strict';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const engine = {
  hbs: false,
  pug: false,
  haml: false,
};

const dir = 'test';

export default ({ filename, template, title, viewport } = {}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: template || `./projects/${dir}/public/templates/index.html`,
      filename: filename || 'index.html',
      title: title || 'VueJs + Webpack 4 template',
      meta: {
        viewport: viewport || 'width=device-width, initial-scale=1.0',
      },
      inject: engine.hbs || engine.pug || engine.haml ? false : true,
    }),
  ],
});
