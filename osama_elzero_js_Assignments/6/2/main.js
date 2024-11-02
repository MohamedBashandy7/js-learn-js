let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 2:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
//**************************** Solve ****************************/
//**************************** Solve ****************************/
//**************************** Solve ****************************/
//**************************** Solve ****************************/
//**************************** Solve ****************************/

if(holidays === 0){
    money = 5000;
    console.log(`My Money is ${money}`);
}else if(holidays === 1){
    money = 3000;
    console.log(`My Money is ${money}`);
}else if(holidays === 2 || holidays === 3){
    money = 2000;
    console.log(`My Money is ${money}`);
}else if(holidays === 4){
    money = 1000;
    console.log(`My Money is ${money}`);
}else{
    money = 0;
    console.log(`My Money is ${money}`);
}
