import "./styles.css";
import _ from "underscore";
import test from "./test";
import exerciseLoop from "./loopNestedArray";
import destructuringExercise from "./destructuringExercise";
import { myfilter, numberArray } from "./filter";
import eachExercise from "./each";
import MyMap from "./mapAndEachExercise";

const myEmptyObject = {};

const objectDestructuring = {
  name: "Rusty",
  room: "bathroom",
  weapon: "candlestick"
};

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

createObj();

exerciseLoop();

eachExercise();

myfilter(numberArray, (element, i) => {
  return element > 0;
});

console.log(
  "MyMap",
  _.map(numberArray, function(element) {
    //recheck le return//
    console.log("UPDATING ELEMENT");
    return element + 1;
  }),
  numberArray
);

const originalArray = ["gun", "hammer", "axe", "spear", "sword", "staff"];
console.log(
  _.map(originalArray, function(weapon, i, arraydebase) {
    //recheck le return//
    return "broken " + weapon;
  }),
  originalArray
);

console.log(
  _.map(
    ["gun", "hammer", "axe"],
    (weapon, i, list) => (list[i] = "broken " + weapon)
  )
);

const createTuple = (a, b, c, d) => {
  console.log(arguments, "AAArguments");
  return [[a, c], [b, d]];
};

const add = function(a, b = 2) {
  console.log(arguments); //logs [3]
  return a + b;
};
console.log(add(3, 2)); //5??

function addES5(a, b = 2) {
  console.log(arguments, "es5");
  return a + b;
}
destructuringExercise();
// a recheck mettre plus de parametres que prevue ne fais pas
// planter la function
console.log(addES5(3, 5, "ffff", "es5"));

createTuple("It", "be", "could", "anyone", "no one");

document.getElementById("app").innerHTML = `
 <h1>Hello Vanilla!</h1>
 <div>
   We use Parcel to bundle this sandbox, you can find more info about Parcel
   <a href="https:parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
 </div>
 `;

const props = { name: "Seb", age: 34, gender: "non-binary" };

const { name, age } = props;

//const { name, age } = { name: 'Mickael', age: 34, gender: 'non-binary' }

const superLol = { first: true, second: false };
const { first, second } = { first: true, second: false };
const { first1, second1 } = { first: true, second: false };
const { first2, second2 } = { first: true, second: false };
const { first3, second3 } = { first: true, second: false };

const { first4, second4 } = superLol;

const frostmourne = {
  weight: 150,
  dmg: 9979879876896986998667869767967796986
};

const { weight, dmg: connard } = frostmourne;

const getFirstName = () => {
  return "Seb";
};

const getLastName = () => {
  return "PennaK";
};

console.log("RENAMING", weight, connard);
