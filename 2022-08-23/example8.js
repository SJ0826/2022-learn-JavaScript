var Grade = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};
var g = new Grade(100, 80);

Grade.prototype = [];

console.log(g);
g.pop();
console.log(g);
g.push(90);
console.log(g);