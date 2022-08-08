// 클래스

class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }

  say() { //say라는 함수를 클래스 내부에 구현하면 자동으로 프로토타입으로 등록된다.
    console.log(this.sound);
  }

}

class Dog extends Animal {
  constructor(name, sound){
    super('개', name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super('고양이', name, sound);
  }
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');
const cat2 = new Dog('냐옹이', '냐옹');

dog.say();
cat.say();
cat.say2();
