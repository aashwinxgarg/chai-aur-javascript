// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "1";

switch (month) {
    case "jan":
        console.log(`january`);
        break;
    case 1:
        console.log(`1 == "1"`);
        break;
    case "feb":
        console.log(`february`);
        break;
    case "march":
        console.log(`march`);
        break;
    case "april":
        console.log(`april`);
        break;
    default:
        console.log(`default case match`);
        break;
}