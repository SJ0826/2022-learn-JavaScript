let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; 
    }
  }
});

alert( numbers[1] ); 
alert( numbers[123] );