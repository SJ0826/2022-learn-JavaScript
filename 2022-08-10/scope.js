// scope: 변수 또는 함수를 선언할 때, 해당 변수 또는 함수가 어디까지 유효한지 범위.

// global scope: 전역 스코프 코드의 모든 범위에서 사용가능하다.
// function scope: 특정 함수내부에서만 사용이 가능하다.
// block scope: 감싸진 블록내부에서만 사용가능하다.

const value = 'hello';

function myFunction() {
  console.log('myFunction: ');
  console.log(value);
}

function otherFunction() {
  console.log('oherFunction: ');
  const value = 'bye';
  console.log(value);
}

muFunction();
otherFunction();

console.log('global scope');
console.log(value);