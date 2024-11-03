/* ============================ */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) =>  one + two + nums.shift();

console.log(calc(10, 50, 20)); // 80


function mo(one, two, ...nums) {
    return one + two + nums.shift();
}

console.log(mo(10, 50, 20)); // 80