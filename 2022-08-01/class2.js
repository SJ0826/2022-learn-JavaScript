// 멤버 변수

class A {
    constructor(name, age) { //constructor을 이용해서 외부에서 입력받음.
        this.name = name;
        this.age = age;
    }
}

console.log(new A('Mark', 37));

// class field는 런타임 확인

class B {
    name; //this.name이 됨.
    age;
}

console.log(new B());

class C {
    name = 'no name'; // 초기값 설정
    age = 0;

    constructor(name, age){ // constructor을 통해서 새로 할당.
        this.name = name;
        this.age = age;
    }
}

console.log(new C('Mark', 37));


