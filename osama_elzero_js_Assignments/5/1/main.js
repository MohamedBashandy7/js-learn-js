// Write With Ternary If Syntax

let st = "Elzero Web School";

// Check if the length of the string is 34 (Example of checking string length)

console.log(st.length * 2 === 34 ? "Good" : "Not Good");
if (st.length * 2 === 34) {
  console.log("Good");
}

// Check if 'W' exists in the string, regardless of position

console.log(st.includes("W") ? "Good" : "Not Good");
if (st.includes("W")) {
  console.log("Good");
}

// Check if `st` is not of type string

console.log(typeof st.length !== "string" ? "Good" : "Not Good");
if (typeof st.length !== "string") {
  console.log("Good");
}

// Check if `st` is of type number

console.log(typeof st.length === "number" ? "Good" : "Not Good");
if (typeof st.length === "number") {
  console.log("Good");
}

// Check if doubling `st` results in "ElzeroElzero"

console.log(
  `${st.slice(0, 6)}${st.slice(0, 6)}` === "ElzeroElzero" ? "Good" : "Not Good"
);
if (`${st.slice(0, 6)}${st.slice(0, 6)}` === "ElzeroElzero") {
  console.log("Good");
}
