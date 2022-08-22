var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner; // 결과가 아니라 inner함수 자체를 반환
};
var outer2 = outer();
console.log(outer2());
console.log(outer2());