// 멤버함수

class A {
    // 방법1: 함수의 이름과 중괄호를 이용해 설정
    hello1() {
        console.log('hello1',this);
    }
    // 방법2: 멤버변수 이름에 함수를 할당하는 방법
    hello2 = () => {
        console.log('hello2', this);
    };
}

new A().hello1();
new A().hello2();

class B {
    name = 'Mark';
    
    hello() {
        console.log('hello', this.name);
    }
}

new B().hello();


