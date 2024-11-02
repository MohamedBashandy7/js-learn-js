/*
    String Challenge
    All Solutions Must Be in One Chain
    You Can Use Concatenate
*/

let a = "Elzero Web School";
// Include This Methods In Your Solution [slice, charAt]

console.log(a.slice(2, 6).charAt(0).toUpperCase() + a.slice(3, 6)); // "Zero"

// 8-H
console.log(a.charAt(13).toUpperCase().repeat(8)); // "HHHHHHHH"

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // "Elzero School"

// Solution Must Be Dynamic And String May Change
console.log(`${a[0].toLowerCase()}${a.slice(1, -1).toUpperCase()}${a.slice(-1).toLowerCase()}`); // "eLZERO WEB SCHOOl"
