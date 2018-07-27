'use strict';

// ?
// -----------------------------------------------------------------------------

import path from 'path';

const env = process.env.NODE_ENV;

// ?
// -----------------------------------------------------------------------------

const getJoinPath = dir => path.join(__dirname, '../../../', dir);

const getResolvePath = dir => path.resolve(__dirname, '../../../', dir);

const getHash = ({ prefix, hashType, digestType, length } = {}) => {
  const option = {
    prefix: '.', // (. / ?)
    hashType: 'md5', // (md5 / ...)
    digestType: 'hex', // (hex / ...)
    length: {
      pre: '5', // Используется при хэше, начинающемся с: .
      post: '32', // Используется при хэше, начинающемся с: ?
    },
  };

  prefix = prefix || option.prefix;
  hashType = hashType || option.hashType;
  digestType = digestType || option.digestType;
  length = prefix === '.' ?
    length || option.length.pre :
    length || option.length.post;

  return env === 'production' ?
    `${prefix}[${hashType}:hash:${digestType}:${length}]` :
    '';
};

const getContentHash = ({ prefix, length } = {}) => {
  const option = {
    prefix: '.', // (. / ?)
    length: {
      pre: '5', // Используется при хэше, начинающемся с: .
      post: '32', // Используется при хэше, начинающемся с: ?
    },
  };

  prefix = prefix || option.prefix;
  length = prefix === '.' ?
    length || option.length.pre :
    length || option.length.post;

  return env === 'production' ? `${prefix}[contenthash:${length}]` : '';
};

const getAssetsPath = {
  static: dir => path.posix.join('static', dir),
};

const readConfigFile = dir => {
  let config;

  try {
    config = require(dir);
  } catch(err) {
    console.error(`No config file found at: ${dir}`);

    config = {};
  };

  return config;
};

// ?
// -----------------------------------------------------------------------------

export {
  getJoinPath as join,
  getResolvePath as resolve,
  getHash as hash,
  getContentHash as contentHash,
  getAssetsPath as assets,
  readConfigFile as config,
};
