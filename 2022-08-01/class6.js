// 상속기본

class Parent {
    name = 'Lee';

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child(); // Parent를 상속받고 있기 때문에 멤버변수 name이 들어온다.
console.log(p, c);

c.hello(); //부모의 멤버함수 출력
c.name = 'Anna';
c.hello();