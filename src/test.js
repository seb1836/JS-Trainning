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
