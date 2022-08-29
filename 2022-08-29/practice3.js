let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); 

delete rabbit.jumps;

console.log( rabbit.jumps );

delete animal.rabbit;

console.log( rabbit.jumps );