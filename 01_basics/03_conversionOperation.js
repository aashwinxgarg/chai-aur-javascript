let score = "33";
let score2 = "33abc";
let score3 = null;
let score4 = undefined;

console.log(typeof score);
console.log(typeof score2);
console.log(typeof score3);
console.log(typeof(score4));

let valueInNumber = Number(score);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let valueInNumber4 = Number(score4);

console.log(typeof valueInNumber);
console.log(typeof valueInNumber2);
console.log(typeof valueInNumber3);
console.log(typeof valueInNumber4);

console.log(valueInNumber);
console.log(valueInNumber2);
console.log(valueInNumber3);
console.log(valueInNumber4);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let isLoggedIn2 = "";
let isLoggedIn3 = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn);
console.log(booleanIsLoggedIn2);
console.log(booleanIsLoggedIn3);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);
