//override
//부모클래스에서 구현한 함수나 변수를 자식클래스에서 다시 구현하는 것.
//자식이 만든 함수가 부모가 만든 함수를 덮어씌우는 것.

class Parent {
    name ='Lee';

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age = 37;

    hello() { //오버라이딩
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent();
const c = new Child();

console.log(p, c);
c.hello();
c.name = 'Anna';
c.hello();