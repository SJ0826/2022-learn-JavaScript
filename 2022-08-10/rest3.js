// 함수파라미터에서의 rest

function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1,2,3,4,5,6,7,8));