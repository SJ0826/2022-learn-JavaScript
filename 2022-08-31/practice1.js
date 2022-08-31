class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// 커피 머신 생성
let coffeeMachine = new CoffeeMachine(100);

console.log(`전력량이 ${coffeeMachine.power}인 커피머신을 만듭니다.`);

// 물 추가
coffeeMachine.power = 25;