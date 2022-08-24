var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};
Rectangle.isRectangle = function (instance) {
  return instance instanceof Rectangle &&
    instance.width > 0 && instance.height > 0;
};

var rec1 = new Rectangle(3, 4);
console.log(rec1.getArea());
console.log(rec1.isRectangle(rec1));
console.log(Rectangle.isRectangle(rec1));