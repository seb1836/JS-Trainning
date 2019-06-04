const myObject = {
  place: "bathroom",
  time: "8pm",
  present: true
};

const from = obj => {
  const newarray = [];
  for (const key in obj) {
    newarray.push(Object.values(obj));
  }
  return newarray;
};
console.log(from(myObject), "return");
