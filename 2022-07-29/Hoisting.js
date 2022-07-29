// 함수 먼저
function hello(){ //함수 선언
    console.log('hello1');
}

hello(); //함수 호출

// 함수 호출 먼저

hello2();

function hello2(){ //함수 선언
    console.log('hello2');
}

// 함수뿐만 아니라 var에서도 호이스팅 가능.
age = 6;
age++;
console.log(age);

var age;

// var 키워드를 사용한 호이스팅은 값을 제외한 선언만 위로 올라간다.
console.log(name);

name= 'Mark';

console.log(name);

var name ='Sujin';

// let을 사용한 호이스팅은 불가능. let은 무조건 선언이 우선시 되어야 함.

console.log(name);

name = 'MARK';

console.log(name);

let name;