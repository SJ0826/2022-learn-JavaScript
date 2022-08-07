function countBiggerThanTen(numbers) {
  return numbers.filter(n => n > 10).length;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

export default countBiggerThanTen;
