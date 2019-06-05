import { createGameLoop } from "./common";

const loopNestedArray = () => {
  const gameLoop = createGameLoop();
  console.log(gameLoop, "-----------------------gameloop--------------------");
  for (let i = 0; i < gameLoop.suspects.length; i++) {
    console.log(gameLoop.suspects[i]);
  }
};

const exerciseLoop = () => {
  loopNestedArray();
};

export default exerciseLoop;
