/*
- Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
let X = 0;
for (let i = 0; i < myAdmins.length; i++) {
  if (!(myAdmins[i] === "Stop")) {
    X++;
  } else {
    break;
  }
}
document.write(`<div>We Have ${X} Admins</div><br>`);

for (let i = 0; i < X; i++) {
  document.write(
    `<div>
        The admin for the team ${i + 1} is ${myAdmins[i]}
        <h3>Team Members :</h3>
          ${myEmployees
            .filter((employee) => employee.startsWith(myAdmins[i][0]))
            .map((employee, index) => `<p> - ${index + 1} ${employee} </p>`)
            .join("")}
    </div><hr>`
  );
}
