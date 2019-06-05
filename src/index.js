import "./styles.css";
import _ from "underscore";
import test from "./test";
import destructuringExercise from "./destructuringExercise";
import filterExercise, { myfilter, numberArray } from "./filter";
import eachExercise from "./each";
import MyMap from "./mapAndEachExercise";
import exerciseLoop from "./loopNestedArray";
import mapBrokenWeapon from "./mapWeaponBreaker";
import objectExercise from "./objectExercise";
import functionExercise from "./functionExercise.js";
import fromExercise from "./fromExercise";

objectExercise();

exerciseLoop();

eachExercise();

filterExercise();

mapBrokenWeapon();

functionExercise();

destructuringExercise();

fromExercise();

document.getElementById("app").innerHTML = `
 <h1>Hello Vanilla!</h1>
 <div>
   We use Parcel to bundle this sandbox, you can find more info about Parcel
   <a href="https:parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
 </div>
 `;
