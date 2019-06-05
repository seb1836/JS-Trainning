const createTuple = (a, b, c, d) => {
  console.log(arguments, "AAArguments");
  return [[a, c], [b, d]];
};

const add = function(a, b = 2) {
  console.log(arguments); //logs [3]
  return a + b;
};

function addES5(a, b = 2) {
  console.log(arguments, "es5");
  return a + b;
}

const functionExercise = () => {
  createTuple("It", "be", "could", "anyone", "no one");
  console.log(add(3, 2)); //5??
  console.log(addES5(3, 5, "ffff", "es5"));
};

export default functionExercise;
