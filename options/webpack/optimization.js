'use strict';

module.exports = {
  cdn: {
    enabled: v => v || false,
    plugin: v => v || 'dynamic-cdn-webpack-plugin',
  },
  splitChunks: {
    enabled: v => v || true,
    name: v => v || 'preset', // normal / preset,
  },
};
