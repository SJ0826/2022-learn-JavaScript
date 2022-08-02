/*
value가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행합니다.
    value가 프로미스 객체면, resolve 된 then 메서드를 실행합니다.
    value가 프로미스 객체가 아니면, value를 인자로 보내면서 then메서드를 실행합니다.
*/

Promise.resolve(/* value */); //프로미스라는 전역객체의 resolve함수를 실행하면서 동시에 promise를 만들어낸다.

Promise.resolve(new Promise((resolve, reject) => { // 비동기 프로미스 객체를 생성해서 resolve의 인자인 value값으로 설정.
    setTimeout(() => {
        resolve();
    }, 1000);
})).then((data) => {
    console.log(
        '프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행됩니다.', 
        data,
    );
}); 

Promise.resolve('bar').then(data => {
    console.log('then 메서드가 없는 경우, fulfilled됩니다.', data);
});

