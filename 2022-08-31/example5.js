var extendClass2 = (function () {
  var Bridge = function () {};
  return function (SuperClass, SubClass, subMedthods) {
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
})();