// 객체의정보를 가져오는 방법

const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

for(let key in doggy) {
    console.log(`${key}: ${doggy[key]}`); //키와 값 모두 출력
}
/*
console.log(Object.keys(doggy)); // 객체의 키 받아오기
console.log(Object.values(doggy)); //키의 값 받아오기
console.log(Object.entries(doggy)); //배열 형태로 키와 값을 반환
*/