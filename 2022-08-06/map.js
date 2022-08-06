//map은 배열안의 원소를 변환할때 사용한다.
// 배열에 있는 내용을 전체적으로 변환을 해줄때 사용하는 내장함수

const array = [1,2,3,4,5,6,7,8];

const squared = array.map(n => n*n);

console.log(squared);