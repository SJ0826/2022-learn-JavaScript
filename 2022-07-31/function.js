// function
/*
function이라는 키워드를 사용한다.
함수도 객체의 한 종류다.
 이름이 hello1인 함수를 선언

function hello1() { // 선언적 함수: 함수에 이름을 붙여서 선언.
    console.log('hello1');
}

console.log(hello1, typeof hello1); // hello1과 hello1의 타입 출력

function hello2(name){
    console.log('hello1');
}

함수의 리턴
함수를 실행하면 얻어지는 값

function hello3(name){
    return `hello3 ${name}`;
}

console.log(hello3('Mark'));

//const hello = funtion() {} 함수를 만들 때 사용하는 키워드

const hello1 = function() {
    console.log('hello1');
};

console.log(hello1, typeof hello1);

// 함수의 매개변수
// 함수를 호출할 때 값을 지정

const hello2 = function(name) {
    console.log('hello2', name);
}

// 함수의 리턴
// 함수를 실행하면 얻어지는 값

const hello3 = function(name) { // 익명함수: 함수의 이름을 만들어주지 않고 특정 변수에 함수를 할당하는 방식
    return `hello ${name}`;
}
*/

// 선언적 funtion과 익명 함수를 만들어 변수에 할당 차이점

console.log(hello2);
hello1(); // 선언적 함수는 호출이 먼저 나와있어도 문제없이 실행.
hello2(); // 익명함수는 호출이 먼저나오면 문제 발생
function hello1() { //선언적 함수
    console.log('hello1');
}

var hello2 = function() {
    console.log('hello2');
}


