// fetch('http://something.com').then().catch().finally();
const promiseOne = new Promise(function(resolve,reject) {
    // do an async task
    // db calls, cryptography, network calls, etc.
    setTimeout(function() {
        console.log('Async task is complete');
        resolve(); // resolve the promise
    }, 1000);
});

promiseOne.then(function() {
    console.log('Promise consumed');
})

new Promise(function(resolve, reject) {
    // do another async task
    setTimeout(function() {
        console.log('Async task 2');
        resolve();
    }, 2000);
}).then(function() {
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 3');
        resolve({username:"Chai", email:"chai@example.com"})
    }, 3000)
})

promiseThree.then(function(username) {
    console.log(username);
    console.log('Async 3 resolved');
})

const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            console.log('Async task 4');
            resolve({username: "hitesh", password: "123"});
        } else {
            console.log('Async task 4');
            reject('ERROR: Something went wrong');
        }
    },4000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username; // this returned value is returned to the next chained then as we can see below
}).then((username) => {
    console.log(username);
    console.log('Async 4 resolved');
}).catch((err) => {
    console.log(err);
    console.log('Async 4 rejected');
}).finally(()=> {
    console.log('Async 4 is either resolved or rejected');
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = true;
        if(!error) {
            console.log('Async task 5');
            resolve({username: "javascript", password: "123"});
        } else {
            console.log('Async task 5');
            reject('ERROR: JS went wrong')
        }
    },5000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response  = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
}).then((response)=> {
    console.log(response);
}).catch((err) => {
    console.log(err);
})
