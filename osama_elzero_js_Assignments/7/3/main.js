let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
console.log(
  `${my[--counter].slice(zero, counter)}${my[
    my.lastIndexOf(my[--counter])
  ].slice(++counter)}`
); // "Elzero"


