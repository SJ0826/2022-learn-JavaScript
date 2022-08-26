// 변수의 유효범위
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "pete";

sayHi();