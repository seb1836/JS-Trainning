const myEmptyObject = {};

const createObj = () => {
  myEmptyObject["character"] = ["John", "Roger", "TheRandomGuy"];
  myEmptyObject["room"] = ["kitchen", "bedroom", "livingroom"];
  myEmptyObject["weapon"] = ["hammer", "knife", "gun"];

  myEmptyObject["nestedObj"] = { fields1: "" };

  console.log(myEmptyObject);
  console.log(myEmptyObject.nestedObj);
  console.log(myEmptyObject.length);

  console.log();
};

const objectExercise = () => {
  createObj();
};

export default objectExercise;
