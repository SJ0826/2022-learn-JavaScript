/*
프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.race를 실행하면,
배열의 모든 프로미스 객체들 중 가장 먼저 fulfiiled된 것으로, then의 함수가 실행됩니다.
then의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 개체의 resolve 인자값을 돌려줍니다.
*/

//Promise.race([프로미스 객체들]); 객체들 중 가장 빠른거 먼저 출력

function p(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.race([p(1000), p(2000), p(3000)]).then(message => {
    console.log('가장빠른 하나가 fulfilled 된 이후에 실행됩니다.', message);
})
