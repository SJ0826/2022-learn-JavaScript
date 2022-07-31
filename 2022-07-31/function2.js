// 생성자 함수로 함수를 만드는 방법

const sum = new Function('a', 'b', 'c', 'return a + b + c'); //매개변수를 문자열로 지정

console.log(sum(1, 2, 3)); 

// function과 new Function의 차이점

globalThis.a = 0; //전역변수
{
    const a =1;

    const test = new Function('return a'); // return값이 지역변수가 아닌 전역변수에  접근.

    console.log(test());
}

{
    const a= 2;

    const test = function() {
        return a; //return이 전역변수가 아닌 지역변수에 접근
    };

    console.log(test());
}

// arrow function(es6)
// arrow 함수는 항상 익명함수
const hello1 = () => {
    console.log('hello1');
}

// 함수의 매개변수
// 한수를 호출할 때 값을 지정

// 매개변수가 하나일 때, 괄호 생략 가능

const hello2 = name => {
    console.log('hello2, name');
}

const hello3 = (name, age) => {
    console.log('hello3', name, age);
}

// 함수의 리턴
// 함수를 실행하면 얻어지는 값

const hello4 = name => {
    return 'hello4 ${name}';
}

const hello5 = name => 'hello5 ${name}';