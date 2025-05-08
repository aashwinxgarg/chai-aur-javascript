const myNums = [1,2,3];


const myTotal = myNums.reduce((acc, currVal)=> {
    // console.log(`Accumulator: ${acc}    Current Value: ${currVal}`)
    return acc + currVal
},0)

const myTot = myNums.reduce((acc, curr)=> acc+curr,0)

console.log(myTot);
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const priceToPay = shoppingCart.reduce((acc,item)=> (item.price+acc),0);
console.log(priceToPay);