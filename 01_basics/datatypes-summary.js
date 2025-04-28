// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(anotherId==id);

const bigNumber = 3456543576654356754n;


// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"hitesh",
    age:22,
}

const myFunc = function() {
    console.log("Hello World");
}

// console.log(typeof bigNumber);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non - Primitive)

let myYoutubeName = "hiteshchoudharydotcom";

let anotherName = myYoutubeName;
anotherName = "chaiaurcode";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

console.log(userOne);
console.log(userTwo);

userTwo.email = "hitesh@google.com";

console.log(userOne);
console.log(userTwo);

