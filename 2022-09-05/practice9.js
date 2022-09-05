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

delete animal.jumps;

console.log( rabbit.jumps );



