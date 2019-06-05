import _ from "underscore";

console.log(
  _.map(
    ["gun", "hammer", "axe"],
    (weapon, i, list) => (list[i] = "broken " + weapon)
  )
);

const mapBrokenWeapon = () => {
  const originalArray = ["gun", "hammer", "axe", "spear", "sword", "staff"];
  console.log(
    _.map(originalArray, function(weapon, i, arraydebase) {
      //recheck le return//
      return "broken " + weapon;
    }),
    originalArray
  );
};

export default mapBrokenWeapon;
