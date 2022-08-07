// reduce: 주로 배열이 주어졌을때, 배열안의 값을 사용하여 연산을할 때 사용.

const numbers = [1,2,3,4,5];
// reduce로 배열의 총합을 구하는 함수를 파라미타로 받고, accumulator 초기값을 0으로 받앗다.
const avg = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1 ) { // 현재 처리하고 있는 원소가 마지막 원소라면
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
 
}, 0);

console.log(avg);