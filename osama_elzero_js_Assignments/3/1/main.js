// Number Challenge

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number in All Variables and Return Integer
console.log(Math.floor(Math.min(a, b, c, d)));

// Use Variable a + d One Time to Get the Needed Output
console.log(Math.pow(a,Math.floor(d))); // Output: 10000

// Get Integer "2" from d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(parseInt(d));

// Use Variables b + d to Get These Values
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // Output: "66.67" as String
console.log(Math.round(+(Math.floor(b) / Math.ceil(d)).toFixed(2))); // Output: 66.67 as Number
