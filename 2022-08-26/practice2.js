// 변수의 유효범위
function makeWorker() {
  let name = "pete";

  return function() {
    console.log(name);
  };
}

let name = "John";

let work = makeWorker();

work();