const createGameLoop = () => {
  // cant write "suspects"
  return {
    suspects: [
      { name: "rusty", color: "orange" },
      {
        name: "Miss Scarlet",
        color: "red"
      }
    ]
  };
};

const createNumberArray = () => {
  return [0, 1, 2];
};

export { createGameLoop, createNumberArray };
