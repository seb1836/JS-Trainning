const simpleArray = [1, 2, 3];
const nestedArray = [1, 2, 3, [4]];
const arrayCloner = array => {
  const clonedArray = array.map(entry => {
    return entry;
  });
  return clonedArray;
};

const arrayExercises = () => {
  console.log(arrayCloner(simpleArray), "simple");
  console.log(arrayCloner(nestedArray), "nested");
};

export default arrayExercises;
