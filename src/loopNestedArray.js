import { gameLoop } from "./common";

const loopNestedArray = () => {
  for (let i = 0; i < gameLoop.suspects.length; i++) {
    console.log(gameLoop.suspects[i]);
  }
};

const exerciseLoop = () => {
  loopNestedArray();
};

export default exerciseLoop;
