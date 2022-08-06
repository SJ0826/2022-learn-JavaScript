/*
function biggerThanThree(numbers) {
  const second = [];
  for (let i = 0; i < numbers.length; i++) {
    if( i < 3) continue;
    second[i] = numbers[i];
    
    if(i === 6){
      console.log(second);
      break;
    }

  }
 
}
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
*/

function biggerThanThree(numbers) {
  const array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
      array.push(numbers[i]);
    }
  }
  return array;
}