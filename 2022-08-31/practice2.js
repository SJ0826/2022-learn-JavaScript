class CoffeeMachine {
  #waterLimit = 200;

  #checkWater(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    if (value > this.#waterLimit) throw new Error("물의 용량을 초과합니다.");
  }
}

let coffeeMachine = new CoffeeMachine();

coffeeMachine.#checkWater();