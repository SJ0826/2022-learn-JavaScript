// 프로토타입과 클래스
// 객체 생성자 상속받기


function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function(){ //코드의 재사용을 위해 프로토타입을 사용. 모든 Animal한테 이런 공통된 함수를 가지고 있게 하자.
    console.log(this.sound);// 객체생성자로 무언가를 만들었을 때 그걸로 만든 객체들끼리 공유할 수 있는 어떠한 값이나 함수.
}

function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog('개', '멍멍이', '멍멍'); // 새로운 객체를 만들 때는 new라는 키워드를 사용함.
const cat = new Cat('고양이', '야옹이', '야옹');

dog.say();
cat.say();
