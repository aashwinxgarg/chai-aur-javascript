// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

let chai = new User("chai","chai@gmail.com","123");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene
function Usere(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

Usere.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

Usere.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

let tea = new Usere("tea","tea@gmail.com","1234")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());