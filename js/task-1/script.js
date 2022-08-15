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

const enterBlockNameQuestion = confirm(
  "Do you want to enter the name of the block?"
);

if (!enterBlockNameQuestion) {
  console.log("Block is not assigned a class");
} else {
  const enterBlockName = prompt("Please, enter block name");
  console.log(`Block name: ${enterBlockName}`);

  const enterElemNameQuestion = confirm(
    "Do you want to enter the name of the element"
  );

  if (enterElemNameQuestion) {
    const enterElemName = prompt("Please, enter element name");
    console.log(`Block name: ${enterBlockName}__${enterElemName}`);

    const enterModifierNameQuestion = confirm(
      "Do you want to enter the name of the modifier"
    );

    if (!enterModifierNameQuestion) {
      console.log(`Block name: ${enterBlockName}__${enterElemName}`);
    } else {
      const enterModifierName = prompt("Please, enter element modifier");
      console.log(
        `Block name: ${enterBlockName}__${enterElemName}_${enterModifierName}`
      );
    }
  } else {
    console.log(`Block name: ${enterBlockName}`);
  }
}
