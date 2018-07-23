'use strict';

const projectName = 'test';

export default ({ entry } = {}) => ({
  // entry: entry || './src/index.js',
  entry: entry || `./projects/${projectName}/src/index.js`,
});
