'use strict';

const contract = (fn, ...types) => {
  return function (...args) {
    const res = fn(...args);
    types.forEach( (type, i) => {
      if (type.name !== typeof [...args, res][i]) new TypeError();
    });
    return res;
  }
};

module.exports = { contract };
