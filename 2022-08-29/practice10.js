let animal = {
  eats: true
};

let rabbit = Object.create(animal);

alert(rabbit.eats); 

alert(Object.getPrototypeOf(rabbit) === animal); 

Object.setPrototypeOf(rabbit, {});