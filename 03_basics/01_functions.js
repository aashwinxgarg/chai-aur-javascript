function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result =  number1 + number2;
    // console.log("hitesh");
    // return result;
    // console.log("hitesh");

    return number1 + number2;
}

// addTwoNumbers()
const result = addTwoNumbers(3, 5);
// console.log(result);

function loginUserMessage(username = "sam") {
    // if(username === undefined) {
    //     console.log(`Please enter a username`);
    //     return;
    // }
    if (!username) {
        console.log(`Please enter a username`);
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "hitesh",
    prices: 199,
};

function handleObject(anyObject) {
    console.log(
        `username is ${anyObject.username} and price is ${anyObject.price}`
    );
}

// handleObject(user);
// handleObject({
//     username: "okay",
//     price: 399,
// });

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
