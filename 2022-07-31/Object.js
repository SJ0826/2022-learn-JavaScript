// object는 함수나 클래스로 틀을 만드는 것.
//함수나 클래스로 객체를 찍어낸다.
// 객체를 인스턴스라고 부른다.

// 생성자 함수로 객체 만들기
/*
function A(){}

const a = new A(); // new를 통해서 함수 A의 객체가 만들어져 변수 a에 할당된다.
console.log(a, typeof a);
console.log(A());

// 생성하면서 데이터 넣기

function B(name, age) {
    console.log(name, age);
}

const b = new B();
const c = new B('Mark', 37);
console.log(B());
*/
// 객체에 속성(프로퍼티) 추가하기

function A(){
    this.name = name = 'Mark';
}

const a = new A();
console.log(a);

//  함수를 속성으로 넣기

function B() {
    this.hello = function() {
        console.log('hello');
    }
}

new B().hello();

// new Function()

