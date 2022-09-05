class Animal {}
class Rabbit extends Animal {}

// 정적 메서드
consol.log(Rabbit.__proto__ === Animal); // true

// 일반 메서드
consol.log(Rabbit.prototype.__proto__ === Animal.prototype); // true