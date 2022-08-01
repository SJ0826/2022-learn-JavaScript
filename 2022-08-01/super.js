// super
// 자식클래스가 부모클래스로부터 상속을 받을 때, 새로운 속성을 추가하려면 super()로 부모클래스로부터 생성자를 호출해 초기값을 세팅한다.
class Parent {
    name;

    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age;

    constructor(name, age){
        super(name);
        this.age = age;
    }

    hello(){
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent('Mark');
const c = new Child('Mark', 37);

console.log(p, c);
c.hello();
