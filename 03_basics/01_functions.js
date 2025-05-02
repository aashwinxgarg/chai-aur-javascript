function sayMyName() {
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
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

    return number1+number2;
}

// addTwoNumbers()
const result = addTwoNumbers(3,5);
// console.log(result);

function loginUserMessage(username = "sam") {
    // if(username === undefined) {
    //     console.log(`Please enter a username`);
    //     return;
    // }
    if(!username) {
        console.log(`Please enter a username`);
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());