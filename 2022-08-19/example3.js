console.log(sum(3,4)); // Error: sum is not a function 함수 표현식은 선언문만 호이스팅한다.

var sum = function(x,y) {
  return x + y;
};

var a = sum(1,2);

var sum = function(x,y) {
  return x + '+' + y + '=' + (x+y);
};

var c = sum(1,2);

console.log(c);