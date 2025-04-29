// const tinderUser = new Object(); // singleton object
// console.log(tinderUser); 

const tinderUser = {}; // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "hitesh",
            lastName: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"}; 

// const obj3 = {obj1,obj2};
// console.log(obj3);


// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);
// console.log(obj1);


const obj4 = Object.assign({}, obj1,obj2);
// console.log(obj4);
// console.log(obj1);

const obj5 = {...obj1, ...obj2};
// console.log(obj5);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]
users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));


