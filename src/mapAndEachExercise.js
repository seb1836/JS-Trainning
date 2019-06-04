import _ from "underscore";
import numberArray from "./common";

const MyMap = (array, cb) => {
  console.log("ENTERING MAP");
  if (Array.isArray(array)) {
    const newArray = [];
    /*for (let i = 0; i < array.length; i++) {
           console.log("LOOP :", i);
           const updatedElement = cb(array[i], i, array);
           newArray.push(updatedElement);
         }
         console.log("RETURNING NEW ARRAY");
         return newArray;*/
    _.each(array, function(updatedElement, i, list) {
      newArray.push(updatedElement);
    });
    return newArray;
  } else {
    for (const key in array) {
      cb(array[key], key, array);
    }
  }
};
const mapWithEach = () => {
  _.map(numberArray, function(element) {
    //recheck le return//
    console.log("UPDATING ELEMENT");
    return element + 1;
  });
};
export default mapWithEach;
