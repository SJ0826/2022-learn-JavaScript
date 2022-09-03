let arr = [1, 2, 3];
let arrCopy = [...arr];

console.log(JSON.stringify(arr) === JSON.stringify(arrCopy));

console.log(arr === arrCopy);

arr.push(4);
console.log(arr);
console.log(arrCopy);