const myObject = {
  place: "bathroom",
  time: "8pm",
  present: true
};

const fromExercise = () => {
  const from = obj => {
    const newarray = [];
    for (const key in obj) {
      return Object.values(obj);
    }
  };
  console.log(from(myObject), "return");
};

export default fromExercise;
