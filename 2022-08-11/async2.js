// promise: ES6문법!, 원래는 라이브러리였는데 일반 자바스크립트 스펙에 추가됨.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('result'); // 성공하면 resolve
  }, 1000);
});

myPromise.then(result => {
  console.log(result);
})