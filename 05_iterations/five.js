const coding = ["js", "ruby", "python", "java", "cpp"];

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((val)=> {
//     console.log(val);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languagename: "javascript",
        languageFileName: "js",
    },
    {
        languagename: "java",
        languageFileName: "java",
    },
    {
        languagename: "python",
        languageFileName: "py",
    }
];

myCoding.forEach((item,index,arr)=>{
    console.log(item.languagename);
})