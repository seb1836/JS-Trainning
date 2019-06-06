import _ from "underscore";
import { createNumberArray } from "./common";

const MyMap = (array, cb) => {
  console.log("ENTERING MAP");

  if (Array.isArray(array)) {
    console.log("inside iiiif");
    const newArray = [];
    /* for (let i = 0; i < array.length; i++) {
           console.log("LOOP :", i);
           const updatedElement = cb(array[i], i, array);
           newArray.push(updatedElement);
         }
         console.log("RETURNING NEW ARRAY");
         return console.log(newArray);*/
    _.each(array, function(updatedElement, i, list) {
      updatedElement = cb(array[i], i, array);
      newArray.push(updatedElement);
    });
    return console.log(newArray, "after");
  } else {
    console.log("gdfgdf");
    for (const key in array) {
      cb(array[key], key, array);
    }
  }
};
const mapWithEach = () => {
  const numberArray = createNumberArray();
  MyMap(numberArray, function(element) {
    //recheck le return//
    console.log(element, "UPDATING ELEMENT");
    return element + 1;
  });
};
export default mapWithEach;
