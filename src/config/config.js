import {dev}  from './dev';
import {prod}  from './prod';
import {test}  from './test';

export const config = (() => {
  switch (process.env.NODE_ENV) {
    case 'dev':
      return dev;
    case 'prod':
      return prod;
    case 'test':
      return test;
    default:
      return dev;
  }
})();