'use strict';

export default ({ variable, interpolate, evaluate } = {}) => ({
  ejsLoader: {
    variable: variable || 'data',
    interpolate: interpolate || /\{\{(.+?)\}\}/g,
    evaluate: evaluate || /\[\[(.+?)\]\]/g,
  },
});
