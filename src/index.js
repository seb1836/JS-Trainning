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
import {requestBuilder, requestSender} from "./ajaxExercise"

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

requestBuilder()

const numbersEven2 = event => {
  // if (event.target.value % 2 === 0) {
  // arrayEven.push(event.target.value, "-");
  // event.currentTarget.value = arrayEven;
  document.getElementById("even").value = "3543";
  console.log("123try");
};
document.getElementById("mybutton").addEventListener("click",numbersEven2)
console.log(window["2"+"1"])

document.getElementById("ajaxButton").addEventListener("click",requestSender)
document.getElementById("app").innerHTML = `
 <h1>Hello Vanilla!</h1>
 <div>
   
 </div>
 `;

export default numbersEven2;
