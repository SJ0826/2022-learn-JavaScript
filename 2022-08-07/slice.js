//slice: 배열을 잘라낼때 사용. 기존의 배열을 건드리지 않음.

const numbers = [10, 20, 30, 40]; 

const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers); //기존의 배열은 남아있음.