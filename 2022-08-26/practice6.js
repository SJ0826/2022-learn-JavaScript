// 객체로서의 함수
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = ()  => count--;

  return counter;
}