var Constructor = function (name) {
  this.name = name;
};
constructor.prototype.method1 = function() {};
constructor.prototype.property1 = 'Constructor Prototype Property';

var instance = new constructor('Instance');
console.dir(Constructor);
console.dir(instance);