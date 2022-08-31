var extendClass1 = function (SuperClass, SubClass, subMedthods) {
  SubClass.prototype = new SuperClass();
  for ( var prop in SubClass.prototype) {
    if (SubClass.prototype.hasOwnProperty(prop)) {
      delete SubClass.prototype[prop];
    }
  }
  if (subMedthods) {
    for (var method in subMedthods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }
  Object.freeze(SubClass.prototype);
  return SubClass;
};

var Sqaure = extendClass1(Rectangle, function (width) {
  Rectangle.call(this, width, width);
});