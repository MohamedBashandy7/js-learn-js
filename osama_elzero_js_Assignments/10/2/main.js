/*
Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = (...args) => {
  return `String ${args.map((name) => `[${name}]`).join(", ")} => Done !`;
};

//Arrow Function
let MO = (...args) =>
  `String ${args.map((name) => `[${name}]`).join(", ")} => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
console.log(MO("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
