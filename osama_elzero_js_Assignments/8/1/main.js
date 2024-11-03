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
        <h3>Team Members:</h3>`
  );
  let teamMemberCount = 1;

  for (let index = 0; index < myEmployees.length; index++) {
    if (myAdmins[i][0] === myEmployees[index][0]) {
      document.write(`<p> - ${teamMemberCount} ${myEmployees[index]}</p>`);
      teamMemberCount++;
    }
  }

  document.write(`</div><hr>`);
}
