'use strict';

const autoprefixer = ({ browsers, grid } = {}) => ({
  browsers: browsers || [ 'last 5 versions' ],
  cascade: false,
  grid: grid || false,
});

module.exports = {
  autoprefixer,
};
