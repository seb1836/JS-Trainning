import _ from "underscore";

const videoData = [
  {
    name: "billy",
    present: true
  },
  { name: "batman", present: true },
  { name: "superman", present: false }
];

const newarray = _.filter(videoData, function(name, i) {
  return videoData[i].present;
});
console.log(newarray, "filterrrrrr");

const newarray2 = _.filter(videoData, function(value, i) {
  return value.present;
});

const map = _.map(newarray2, function(value, i) {
  return value.name;
});
console.log(newarray, "filterrrrrr");
console.log(map, "MAAAAP");
