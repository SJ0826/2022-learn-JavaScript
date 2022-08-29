var createCar = function () {
  var fuel: Math.ceil(Math.random() * 10 + 10); // 연료
  var power: Math.ceil(Math.random() * 3 + 2);
  var moved: 0;
  return {
    get moved () {
      return moeved;
    },
    run: function () {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / this.power;
      if(this.fuel < wasteFuel) {
        console.log('이동불가');
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(km + 'km 이동 (총 ' + this.moved + 'km)');
    }
  };
};
var car = createCar();
car.run();
console.log(car.moved);
console.log(car.fuel);
console.log(power);

car.fuel = 1000;
console.log(car.fuel);
car.run();

car.power = 100;
console.log(car.power);
car.run();

car.moved = 1000;
console.log(car.moved);
car.run();

