import { TIMEOUT_VALUE } from './config';

export const getJSON = async function (url) {
  const res = Promise.race([fetch(url), timeout(TIMEOUT_VALUE)]);
};
