class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} 이/가 멈췄습니다.`);
  }
}

class Rabbit extends Animal {
  
  constructor(name, earLength) {
    super(name);
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }
  hide() {
    alert(`${this.name} 이/가 숨었습니다!`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("흰 토끼");

rabbit.run(5); 
rabbit.hide()