let myName = "hitesh     ";
let myChannel = "chai     ";
console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower : function() {
        console.log(`Spider power is ${this.spiderman}`)
    }
};

Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all objects`);
}

myHeroes.hitesh();
heroPower.hitesh();

Array.prototype.heyhitesh = function() {
    console.log(`hitesh is present in all arrays`);
}

myHeroes.heyhitesh();
// heroPower.heyhitesh(); 
