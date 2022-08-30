var Person = function (name) {
  this.name = name;
};

Person.prototype.getName = function () {
  return this.name;
};
var suzi = new Person('Suzi');
suzi.__proto__.getName();