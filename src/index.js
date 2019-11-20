import "./styles.css";
import _ from "underscore";
import test from "./test";
import destructuringExercise from "./destructuringExercise";
import filterExercise, { myfilter, numberArray } from "./filter";
import eachExercise from "./each";
import mapWithEach from "./mapAndEachExercise";
import exerciseLoop from "./loopNestedArray";
import mapBrokenWeapon from "./mapWeaponBreaker";
import objectExercise from "./objectExercise";
import functionExercise from "./functionExercise.js";
import fromExercise from "./fromExercise";
import arrayExercises from "./arrayExercise";
import { numbersEven } from "./common";

objectExercise();

exerciseLoop();

eachExercise();

filterExercise();

mapBrokenWeapon();

functionExercise();

destructuringExercise();

fromExercise();

mapWithEach();

arrayExercises();

const numbersEven2 = event => {
  alert("lol");
  // if (event.target.value % 2 === 0) {
  // arrayEven.push(event.target.value, "-");
  // event.currentTarget.value = arrayEven;
  document.getElementById("even").innerHTML = "3543";
};

document.getElementById("app").innerHTML = `
 <h1>Hello Vanilla!</h1>
 <div>
   
 </div>
 `;
