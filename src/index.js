import "./styles.css";
import _ from "underscore";
import test from "./test";

const myObject = {
  place: "bathroom",
  time: "8pm",
  present: true
};

const videoData = [
  {
    name: "billy",
    present: true
  },
  { name: "batman", present: true },
  { name: "superman", present: false }
];

const newarray = _.filter(videoData, function(name, i) {
  return videoData[i].present;
});
console.log(newarray, "filterrrrrr");

const objectDestructuring = {
  name: "Rusty",
  room: "bathroom",
  weapon: "candlestick"
};

const map = _.map(newarray2, function(value, i) {
  return value.name;
});
console.log(newarray, "filterrrrrr");
console.log(map, "MAAAAP");

const createObj = () => {
  myObject["character"] = ["John", "Roger", "TheRandomGuy"];
  myObject["room"] = ["kitchen", "bedroom", "livingroom"];
  myObject["weapon"] = ["hammer", "knife", "gun"];

  myObject["nestedObj"] = { fields1: "" };

  console.log(myObject);
  console.log(myObject.nestedObj);
  console.log(myObject.length);

  console.log();
};

createObj();

const loopNestedArray = () => {
  for (let i = 0; i < gameLoop.suspects.length; i++) {
    console.log(gameLoop.suspects[i]);
  }
};

loopNestedArray();

_.each = function(list, callback) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list);
      console.log(list[i]);
    }
  } else {
    for (const key in list) {
      callback(list[key], key, list);
    }
  }
};

_.each(["jean", "claude", "van", "damme"], function(name, i, list) {
  console.log(list, "array");
  if (list[i + 1]) {
    console.log(name, "is younger than", list[i + 1]);
  } else {
    console.log(name, "is the oldest");
  }
});

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
const myfilter = (array, cb) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const numberArray = [0, 1, 2];

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

// a recheck mettre plus de parametres que prevue ne fais pas
// planter la function
console.log(addES5(3, 5, "ffff", "es5"));

createTuple("It", "be", "could", "anyone", "no one");

const from = obj => {
  const newarray = [];
  for (const key in obj) {
    newarray.push(Object.values(obj));
  }
  return newarray;
};
console.log(from(myObject), "return");
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

export default gameLoop;
