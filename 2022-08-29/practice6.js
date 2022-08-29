function Rabbit() {}
Rabbit.prototype = {
  eats: true
};



Rabbit.prototype = {};

let rabbit = new Rabbit();

console.log( rabbit.eats );