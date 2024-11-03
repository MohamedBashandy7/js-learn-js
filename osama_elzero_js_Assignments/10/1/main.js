/*
Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = function (...names) {
  // Parameter ?
  return `String [${names.join("],[")}] => Done !`;
};
//Arrow Function
let mo = (...names) => `String [${names.join("],[")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
console.log(mo("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
