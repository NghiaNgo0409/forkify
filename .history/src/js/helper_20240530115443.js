import { TIMEOUT_VALUE } from './config';
const recipeContainer = document.querySelector('.recipe');

export const getJSON = async function (url) {
  const res = Promise.race([fetch(url), timeout(TIMEOUT_VALUE)]);
};
