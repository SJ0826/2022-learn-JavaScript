/*
보통 reject 함수를 실행하며 rejected 되는 이유를 넘기는데, 표준 내장 객체인 Error의 생성자를 이용하여 Error 객체를 만들 수 있습니다.
*/
function p(){
    return new Promise((resolve, reject) =>{
        /*pending*/
        setTimeout(() => { //setTimeout: 만료된 후 함수나 지정한 코드 조각을 실행하는 타이머를 설정합니다.
            reject(new Error('bad')); // rejected
        }, 1000 );
    });
}

p()
    .then(message => {
        console.log('1000ms 후에 fulfilled 됩니다.', message);
    })
    .catch(error => {
        console.log('1000ms 후에 rejected 됩니다.',error)
    });
