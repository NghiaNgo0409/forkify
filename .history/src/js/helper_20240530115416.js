export const getJSON = async function (url) {
  const res = Promise.race([fetch(url)]);
};
