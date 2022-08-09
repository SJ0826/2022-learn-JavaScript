// 배열 비구조화 할당

const array = [1, 2];

const [one, two = 2] = array;

console.log(one);
console.log(two);