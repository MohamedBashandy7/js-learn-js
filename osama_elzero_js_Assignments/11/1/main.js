/*
  Higher Order Functions Challenges

  You Can Use
  - ""
  - []
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain
*/

let myString = "1,2,3,EE,l,z,e,r,o,_W,e,b,_S,c,h,o,o,l,1,2,0,Z";

let a = myString
  .split(",")
  .map((word) => word.replaceAll("_", " "))
  .filter((words) => isNaN(words))
  .reduce((acc, current) => acc + current)
  .slice(true, -isNaN(myString));
console.log(a);
