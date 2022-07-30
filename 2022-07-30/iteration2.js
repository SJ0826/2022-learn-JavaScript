// while(조건 { 조건이 거짓이 될 떄까지 반복 실행})

while (true) {
    console.log('안녕하세요');
    if (Math.random() * 100 > 90) {
        break;
    }
}

//do { 조건이 거짓이 될 때까지 반복 실행} while(조건)

do { // 최초 한번은 무조건 실행
    console.log('안녕하세요');
} while (Math.random() * 100 > 90);

//for of: iterble protocol을 가지고 있는 객체에 모두 사용할 수 있습니다.

for (const i of [1, 2, 3]){
    console.log(i);
}
//for in: 모든 프로퍼티에 사용할 수 있습니다.

Object.prototype.test = function() {};

for (const i in { a: 1, b: 2, c: 3}){
    console.log(i);
}