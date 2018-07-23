'use strict';

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [ 'projects/test/src/**/*.{js,vue}' ],
  coverageDirectory: '.jest_coverage',
  moduleFileExtensions: [ 'js', 'vue', 'json' ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/projects/test/src/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.vue$': 'vue-jest',
    // '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
    //   'jest-transform-stub',
  },
  snapshotSerializers: [ 'jest-serializer-vue' ],
};
