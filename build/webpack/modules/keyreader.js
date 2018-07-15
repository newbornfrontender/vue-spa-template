'use strict';

const readOptions = (optionsPath) => {
  let options;
  try {
    options = require(optionsPath);
  } catch(err) {
    console.error(`No config file found at: ${optionsPath}`);
    options = {};
  };
  return options;
};

const getWebpackConf = (filename) => {
  let options = readOptions(`../../../options/webpack/${filename}`);
  return options;
};

export { getWebpackConf };
