import _ from "underscore";

const each = function(list, callback) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list);
      console.log(list[i]);
    }
  } else {
    for (const key in list) {
      callback(list[key], key, list);
    }
  }
};

const eachExercise = () => {
  _.each(["jean", "claude", "van", "damme"], function(name, i, list) {
    console.log(list, "array");
    if (list[i + 1]) {
      console.log(name, "is younger than", list[i + 1]);
    } else {
      console.log(name, "is the oldest");
    }
  });
};

export default eachExercise;
