const myfilter = (array, cb) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

export { myfilter };
