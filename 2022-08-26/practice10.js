// setTimeout
function printNumber(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log(current);
    if( current < to ) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumber(5, 10);