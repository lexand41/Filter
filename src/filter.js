const filter = (arr, key, val) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    if (obj[key] === val) result.push(obj);
  }
  return result;
};

export default filter;

