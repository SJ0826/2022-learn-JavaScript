function countBiggerThanTen(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    if(number > 10){
      sum += 1;
    }
  })
  console.log(sum);
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5