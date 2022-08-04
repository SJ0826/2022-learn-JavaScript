// Promise 객체가 rejected된 경우의 처리를 위해
// try catch를 이용한다.

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('reason'));
        }, ms)
    })
}

 (async function main() {
    try{
        const ms = await p(1000);
    } catch (error) {
        console.log(error);
    }
 })();