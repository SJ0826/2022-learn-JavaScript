const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate(); //업데이트를 위해 함수를 한번 호출.
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
}

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;

numbers.a = 9;
console.log(numbers.sum);