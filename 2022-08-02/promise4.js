/*
마찬가지로 프로미스 객체가 rejected되는 시점에 p.catch안에 설정한 callback함수가 실행됩닏.
*/
function p(){
    return new Promise((resolve, reject) =>{
        /*pending*/
        setTimeout(() => { //setTimeout: 만료된 후 함수나 지정한 코드 조각을 실행하는 타이머를 설정합니다.
            reject(); // rejected
        }, 1000 );
    });
}

p().then(() => {
    console.log('1000ms 후에 fulfilled 됩니다.');
}).catch(() => {
    console.log('1000ms 후에 rejected 됩니다.')
});