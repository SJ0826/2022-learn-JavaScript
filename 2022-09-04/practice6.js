function getFunc() {
  let value = "test";

  let func = new Function('consol.log(value)');

  return func;
}

getFunc()();