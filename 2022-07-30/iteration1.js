// 보통 어떤 유한한 횟수만큼 반복할 때는 for문을 사용합니다.
// for(초기화; 반복 조건; 반복이 된 후 실행되는 코드) {
//    반복이 되는 코드 블럭
//}

// 초기화 하면서 선언된 변수를 중괄호 안 반복 블럭에서 사용할 수 있습니다.
for(let i =0; i < 5; i++) {
    console.log('안녕하세요', i);
}

for (let i = 0, j = 5; i<5; i++) {
    console.log('안녕하세요', i, j);
}

for (let i = 0, j = 2; i<5; i++, j = j * j) {
    console.log('안녕하세요', i, j);
}

// 반복문을 즉시 종료하고 싶을 때는 반복되는 블럭 안에서 break;를 실행하면 가능합니다.

for(let i =0; i < 5; i++){
    console.log(i);
    if(i > 2) {
        break;
    }
    console.log('안녕하세요', i);
}

// 반복되는 블럭 안에서 continue;를 만나면 거기서 바로 해당 블럭은 종료됩니다.
// 그리고 이와 같이 다음 반복이 있으면 다음 반복으로 넘어갑니다.

for (let i=0; i<5; i++) {
    console.log(i);
    if(i < 2) {
        continue;
    }
    console.log('안녕하세요', i);
}

// for 무한루프 
for(;;) {
    console.log('안녕하세요');
    if (Math.random * 100 > 90) {
        break;
    }
}