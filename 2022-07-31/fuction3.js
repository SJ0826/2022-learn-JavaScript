// new 함수();
// 생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법
/*
function Person(name, age) { //name과 age를 인자로 함. 인자로 넣어준 name과 age를 객체가 프로퍼티로 가지게 함.
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person('Mark', 37);

console.log(p, p.name, p.age); 

const a = new Person('Anna', 26);

console.log(a, a.name, a.age);

const Cat = (name, age) => {
    console.log(this);
    this.name = name;
    this.age = age;
} 

const c = new Cat('고양이',1); // arrow함수는 this를 사용하지 않기 때문에 생성자함수를 생성할 수 없음.

// 함수 안에서 함수를 만들어 리턴

function plus(base) {
    return function(num) {
        return base + num;
    }
} 

const plus5 = plus(5);
console.log(plus5(10));

const plus7 = plus(7);
console.log(plus7(8));

// 함수를 호출할 때, 인자로 함수를 사용

function hello(c){
    console.log('hello');
    c();
}

hello(function() {
    console.log('콜백');
});
*/
