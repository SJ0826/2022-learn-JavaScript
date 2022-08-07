//splice: 배열에서 특정항목을 제거한다. 제거한느과정에서 해당 우너소가 몇번째인지 명시해야함.
//soliced: 잘라낸 배열의 결과값을 의미.
const numbers = [10, 20, 30, 40]; 
const index = numbers.indexOf(30);
const spliced = numbers.splice(3, 1); // index부터 1개를 지우겠다.
console.log(spliced);
console.log(numbers);