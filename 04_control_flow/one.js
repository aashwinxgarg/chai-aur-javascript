// // if 

// const isUserLoggedIn = true;
// const temperature = 41;

// if(temperature===40) {
//     console.log("less than 50");   
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log(`execute`);
// // <, >, <=, >=, ==(value only), !=, ===(value and datatype), !==, 

// const score = 200;
// if(score>100) {
//     let power = "fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance = 1000;

// if(balance > 500) console.log("test");
// if(balance > 500) console.log("test1"), console.log("test2");

// if(balance<500) {
//     console.log(`less than 500`);
// } else if(balance<750) {
//     console.log(`less than 750`);
// } else if(balance<900) {
//     console.log(`less than 900`);
// } else {
//     console.log(`less than 1200`)
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard & 2==3) {
    console.log(`allowed to buy courses`);
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log(`user logged in`);
}

