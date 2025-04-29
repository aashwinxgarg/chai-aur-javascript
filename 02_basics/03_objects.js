// singleton

// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

// Object.freeze(JsUser)
JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser.email);

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JsUser");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetingTwo());
