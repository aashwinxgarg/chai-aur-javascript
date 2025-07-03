// OBJECT LITERAL
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        // console.log('got user details from database');
        // console.log(`Username: ${this.username}`)
        // console.log(this);
    }

}
// console.log(user.username);
user.getUserDetails();
// console.log(this);





// CONSTRUCTOR FUNCTION

// const promise = new Promise();
const date = new Date();

function User(username, loginCount, isLoggedIn) {
    this.Username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = new User("hitesh",12,true);
// console.log(userOne);

const userTwo = new User("chaiaurcode", 11, false);
// console.log(userOne);
// console.log(userTwo);

// new keyword creates an empty object called an instance. 
// Constructor function is called due to the new keyword 
// and this keyword is created and all the arguments are stored in this keyword manually 
// and at last the execution context i.e. this is returned back to your variable

console.log(userOne.constructor);
