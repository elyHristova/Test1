// // a + b result
// function sum (a, b) {
//     return a + b;
// }





function addOne (arg) {
    return arg + 1
}
function sum2 (a, b, addOne) {
    return (addOne (a + b));
}
const result = sum2 (2, 2, addOne)
console.log (`After ${result}`)

function sum2 (a, b, addOne) {
    return (addOne (a + b));
}