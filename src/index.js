import "./styles.css";

const myObject = {};

const objectDestructuring = {
  name: "Rusty",
  room: "bathroom",
  weapon: "candlestick"
};
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

// a revoir const [7,8,9]=["a","b","c"]
const destructuring = () => {
  const { room, weapon } = { room: "bathroom", weapon: "candlestick" };
  console.log(room, weapon);
};

destructuring();

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
