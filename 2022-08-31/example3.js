var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};
var rect = new Rectangle(3, 4);
console.log(rect.getArea());

var Sqaure = function (width) {
  Rectangle.call(this, width, height);
};
Sqaure.prototype.getArea = function () {
  return this.width * this.width;
};
var sq = new Sqaure(5);
console.log(sq.getArea());