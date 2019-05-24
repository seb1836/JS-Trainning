import "./styles.css";
import _ from 'underscore'

const myObject = {};

const objectDestructuring = {
  name: "Rusty",
  room: "bathroom",
  weapon: "candlestick"
};

const gameLoop = {
  // cant write "suspects"
  suspects: [
    {
      name: "rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
};

console.log(gameLoop.suspects);
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
  console.log(room, weapon, "destructuring");
};

destructuring();

const loopNestedArray = () => {
  for (let i = 0; i < gameLoop.suspects.length; i++) {
    console.log(gameLoop.suspects[i]);
  }
};

loopNestedArray();

const extractGuilty = () => {
  for (let i = 0; i < gameLoop.suspects.length; i++) {
    if (gameLoop.suspects[i].name === "Miss Scarlet") {
      console.log(gameLoop.suspects[i].name + " is guilty");
    }
  }
};

const destructuringColors = () => {
  // J'extrait suspects de gameloop
  const {
    suspects: [{ name: name1, color: color1 }, { name: name2, color: color2 }]
  } = gameLoop;

  console.log(name1, color1, name2, color2, "my color");
};

extractGuilty();

destructuringColors();

const eachExercise = ()=>{

  _.each = function(list,callback){
  for(i=0;i<list.length;i++){
    callback(){
      console.log(list[i])
    }
  }
    
  }


}

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const props = { name: 'Seb', age: 34, gender: 'non-binary'}

const {name, age} = props

// const { name, age } = { name: 'Mickael', age: 34, gender: 'non-binary' }

const superLol = { first: true, second: false }
const { first, second} = { first: true, second: false}
const { first1, second1 } = { first: true, second: false }
const { first2, second2 } = { first: true, second: false }
const { first3, second3 } = { first: true, second: false }


const { first4, second4 } = superLol

const frostmourne = {
  weight: 150,
  dmg: 9979879876896986998667869767967796986,
}

const { weight, dmg: connard } = frostmourne

console.log('RENAMING', weight, connard)