const arrayEven = [];

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

const numbersEven = event => {
  alert("lol");
  // if (event.target.value % 2 === 0) {
  // arrayEven.push(event.target.value, "-");
  // event.currentTarget.value = arrayEven;
  document.getElementById("even").innerHTML = "3543";
};

export { createGameLoop, createNumberArray, numbersEven };
