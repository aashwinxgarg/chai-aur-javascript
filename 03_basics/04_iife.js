// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`Db connected`);
})();

((name) => {
    console.log(`Db Connected 2 ${name}`);
})("hitesh");