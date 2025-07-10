class User {
    constructor(username) {
        this.username = username;
    }
    static createId() {
        return `123`;
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }
}
const hitesh = new User("hitesh");
// console.log(hitesh.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone","i@phone.com");
console.log(iphone);
iphone.logMe();
console.log(User.createId());

