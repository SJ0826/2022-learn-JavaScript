// get, set

class A {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }

    set name(value) {
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a);
a.name = 'Mark'; //set함수 호출
console.log(a);
console.log(a.name);
console.log(a._name);

// readonly

class B {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }
}

const b = new B();
console.log(b);
B.name = 'Mark';
console.log(b); //set 함수가 없기 때문에 readonly처럼 동작을 함.
