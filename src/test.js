import _ from "underscore";

console.log("--------------------------TEST---------------------------");

function CreateSuspectObjects(name) {
  return {
    name,
    color: name.split(" ")[1],
    speak() {
      console.log(`my name is ${name}`);
    }
  };
}

const suspects = ["Seb pennaK", "Gros gomes"];

const suspectList = _.map(suspects, function(name) {
  return CreateSuspectObjects(name);
});

_.each(suspectList, function(suspect) {
  suspect.speak();
});

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
