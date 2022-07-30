// 삼항 연산자를 이용한 조건부 실행

// 조건 ? 조건이 참이면 실행되는 표현식: 조건이 거짓이면 실행되는 표현식
// 중괄호 {}를 사용할 수 없는 문법이기 때문에 하나의 표현식만 가능합니다.

let n = 5;

console.log(n % 5 === 0 ? '5의 배수 입니다.' : '5의 배수가 아닙니다.');

// 표현식의 결과를 변수에 할당합니다.

const message = n % 5 === 0 ? '5의 배수 입니다.' : '5의 배수가 아닙니다.';
console.log(message);

//switch를 이용한 조건문
//switch 뒤 괄호 안에 있는 값이 무엇인지 중괄호 안에 있는 코드들을 비교해서 실행합니다.
//이중에 default: 뒤에 있는 문장은 항상 참이어서 실행되는 블럭입니다.
//문장이 한 줄이라서 중괄호는 생략했습니다.

n = 5;

switch (n) {
    default:
        console.log(n);
}

//다음은 n이 5로 나누었을 때 나머지가 0인 경우에 실행되는 블럭을 추가한 것입니다.
// case '비교할 값': 을 이용해서 맞으면 실행됩니다.
// case 0: 인 경우와 default: 인 경우 두 블럭 모두 순서대로 실행됩니다.

//switch (n % 5) {
//    case 0: {
//        console.log('5의 배수입니다.');
//    }
//    default:
//        console.log(n);
//}

// 만약에 해당 블럭이 실행된 후 다음 블럭을 거치지 않고 switch문을 나가고 싶다면,
// case문 안에서 break;를 실행합니다.

//switch (n % 5) {
//    case 0: {
//        console.log('5의 배수입니다.');
//        break;
//    }
//    default:
//        console.log(n);
//}

// break와 case 문의 순서를 잘 조정하여, 원하는 코드를 만들어 낼 수 있도록 제대로 이해해야 합니다.
switch (n % 5) {
    case 0: {
        console.log('5의 배수입니다.');
        break;
    }
    case 1:
    case 2:
    case 3:
    case 4:
    console.log('5의 배수가 아닙니다.');
        
    default:
        console.log(n);
}