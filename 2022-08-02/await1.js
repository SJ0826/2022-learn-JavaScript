// async function
//async function 함수이름() {}
//const 함수이름 = async() => {}
//promise 객체를 리턴하는 함수
//promise를 기반으로 하고 있음.



function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    })
}

// promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then(ms => {
    console.log('${ms} 후에 실행된다.');
});

// Promise 객체를 리턴하는 함수를 await로 호출하는 방법

const ms = await p(1000);
console.log('${ms} 후에 실행된다.');