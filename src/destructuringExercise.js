import gameLoop from "./index.js";

// a revoir const [7,8,9]=["a","b","c"]
const destructuring = () => {
  const { room, weapon } = { room: "bathroom", weapon: "candlestick" };
  console.log(room, weapon, "destructuring");
};

destructuring();

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

console.log(gameLoop.suspects, "LOOOP");

export { destructuring, destructuringColors, extractGuilty };
