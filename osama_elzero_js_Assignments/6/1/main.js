let job = "IT";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

//**************************** Solve ****************************/
//**************************** Solve ****************************/
//**************************** Solve ****************************/
//**************************** Solve ****************************/
//**************************** Solve ****************************/

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(`My Money is ${salary}`);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(`My Money is ${salary}`);
    break;
  case "Designer":
  case "Developer":
    salary = 7000;
    console.log(`My Money is ${salary}`);
    break;
  default:
    salary = 4000;
    console.log(`My Money is ${salary}`);
    break;
}
