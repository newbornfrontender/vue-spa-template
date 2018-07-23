'use strict';

const dir = 'test';

export default ({ entry } = {}) => ({
  entry: entry || `./projects/${dir}/src/main.js`,
});
