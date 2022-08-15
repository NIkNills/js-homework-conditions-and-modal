"use sctrict";

const enterText = prompt("Please, enter text!");

console.log(enterText);

const enterNumberA = +prompt("Please, enter number A"),
  enterNumberB = +prompt("Please, enter number B"),
  enterNumberC = +prompt("Please, enter number C");

alert(enterNumberA + enterNumberB + enterNumberC);

const enterYourName = prompt("Please, enter your name"),
  enterYourAge = +prompt("Please, enter your age");

if (enterYourAge >= 18) {
  alert(`Welcome, ${enterYourName}`);
} else {
  alert(`Sorry, ${enterYourName}, access denied`);
}