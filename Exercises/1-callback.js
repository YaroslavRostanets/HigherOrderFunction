'use strict';

const iterate = (obj, callback) => {
  Object.keys(obj).forEach( key => callback(key, obj[key], obj) );
};

module.exports = { iterate };
