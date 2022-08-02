function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve(ms);
              reject(new Error('reason'));
        }, ms)
    })
}

async function asyncP() {
    const ms = await p(1000); // 1초 기다렸다가 reject불리면서 new error가 throw발생함. 바로 catch로 넘어감.
    return 'Mark' + ms;
}

 (async function main() {
    try{
        const name = await asyncP(); // 비동기가 끝날때 까지 기다림.
        console.log(name);
    } catch (error) {
        console.log(error);
    }
 })();