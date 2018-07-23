'use strict';

// -----------------------------------------------------------------------------

import path from 'path';

const env = process.env.NODE_ENV;

// -----------------------------------------------------------------------------

const getJoin = dir => {
  const subDeep = '../../../';

  return path.join(__dirname, subDeep, dir)
};

const getResolve = dir => {
  const subDeep = '../../../';

  return path.resolve(__dirname, subDeep, dir)
};

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

const getContentHash =  ({ prefix, length } = {}) => {
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

const getAssets = dir => {
  const subDir = 'static';

  return path.posix.join(subDir, dir)
};

const readOptions = path => {
  let options;

  try {
    options = require(path);
  } catch(err) {
    console.error(`No config file found at: ${path}`);

    options = {};
  };

  return options;
};

// -----------------------------------------------------------------------------

export {
  getJoin as join,
  getResolve as resolve,
  getHash as hash,
  getContentHash as contentHash,
  getAssets as assets,
  readOptions as options,
};

// =============================================================================

// import getHash from './parts/hash';
// import getContentHash from './parts/content-hash';
// import getJoin from './parts/join';
// import getResolve from './parts/resolve';
// import getAssets from './parts/assets';

// export {
//   getJoin as join,
//   getResolve as resolve,
//   getHash as hash,
//   getContentHash as contentHash,
//   getAssets as assets,
// };

// =============================================================================
