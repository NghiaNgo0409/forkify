import { TIMEOUT_VALUE } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_VALUE)]);

    const data = await res.json();

    if (!data.ok) throw new Error(`${error.message} ${data.status}`);

    return data;
  } catch (error) {}
};
