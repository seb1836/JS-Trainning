import { createNumberArray } from "./common";

const myfilter = (array, cb) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
const filterExercise = () => {
  const numberArray = createNumberArray();
  myfilter(numberArray, (element, i) => {
    return element > 0;
  });
};

export default filterExercise;
