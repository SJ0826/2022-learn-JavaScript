/*
if (표현식) {
    표현식이 참으로 평가될 때, 실행되는 문장들의 모임
}
*/

if(true) {
    console.log('항상 실행');
}

if(false) {
    console.log('항상 실행되지 않음');
}
// 블록에 코드가 한줄이면, 중괄호는 생략 가능합니다.

if(true) console.log('항상 실행');

if(false) console.log('항상 실행되지 않음');``

// 표현식이 거짓으로 평가될 때

if(false) console.log(false);
if(0) console.log(0);
if('')console.log('');
if(null) console.log(null);
if(undefined) console.log(undefined);
if(NaN) console.log(NaN);

// 표현식이 참으로 평가될 때

if(true) console.log(true);
if (37) console.log(37);
if (-37) console.log(-37);
if ('Mark') console.log('Mark');
if({}) console.log({});
if ([]) console.log([]);

//if에 해당하지 않을 때 else {}

const n = 37;

if( n > 0 ) {
    console.log('n이 0보다 큰 경우');
} else {
    console.log('n이 0보다 크지 않은 경우');
}

if( n > 0 )  console.log('n이 0보다 큰 경우');
else console.log('n이 0보다 크지 않은 경우');

