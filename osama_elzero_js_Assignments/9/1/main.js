/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Type
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
  let name, age, status;

  // ترتيب الأنواع بناءً على النوع الذي يتم التمرير به
  typeof a === "string"
    ? (name = a)
    : typeof a === "number"
    ? (age = a)
    : (status = a);

  typeof b === "string"
    ? (name = b)
    : typeof b === "number"
    ? (age = b)
    : (status = b);

  typeof c === "string"
    ? (name = c)
    : typeof c === "number"
    ? (age = c)
    : (status = c);

  document.write(
    `Hello ${name}, Your Age Is ${age}, You Are ${
      status ? "Available" : "Not Available"
    } For Hire<br>`
  );
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
