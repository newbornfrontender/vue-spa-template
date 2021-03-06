'use strict';

module.exports = {
  optimization: {
    cdn: {
      enabled: v => v || false,
      plugin: v => v || 'dynamic-cdn-webpack-plugin', // dynamic-cdn-webpack-plugin / ?
    },
    splitChunks: {
      enabled: v => v || true,
      name: v => v || 'preset', // normal / preset,
    },
  },
};
