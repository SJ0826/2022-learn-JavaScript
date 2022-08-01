// static 변수, 함수
// 직접적으로 클래스를 통해서 변수와 함수를 사용하는 방식

class A{
    static age = 37;
    static hello() {
        console.log(A.age);//new A를 통해 만든 객체가 아니라 클래스 자체의 static 변수
    }
}

console.log(A, A.age);
A.hello();

class B {
    age = 37; //static이 아닌 멤버변수로 초기값 설정.
    static hello() {
        console.log(this.age);
    }
}

console.log(B, B.age);
B.hello();
// new B().hello(); 에러가 남. hello는 static함수이기 때문에 객체에 속해있는 함수가 아님

class C {
    static name = '이 클래스의 이름은 C가 아니다.'
}

console.log(C); // static name이라는 변수가 클래스의 이름을 뜻함.