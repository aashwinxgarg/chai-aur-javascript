// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate);
console.log(myCreatedDate.toString());

let myCreatedDateTwo = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDateTwo.toString());

let myCreatedDateThree = new Date("2023-01-14");
console.log(myCreatedDateThree.toLocaleString());

let myCreatedDateFour = new Date("01-14-2023");
console.log(myCreatedDateFour.toString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDateFour.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(Date.now());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time`

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));
