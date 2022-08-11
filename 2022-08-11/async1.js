function work(callback) {
  setTimeout(() => {// setTimeOut: 하고자 하는 작업이 백그라운드에서 수행되기 때문에 기존의 코드 흐름을 막지 않고 동시에 다른 작업을 진행할 수 있음.
    const start = Date.now(); // 현재 날짜를 숫자형태로 표시해줌.
    for (let i = 0; i < 1000000000; i ++) {


    }
  const end = Date.now();
  console.log(end - start  + 'ms'); 
  callback(end - start); // 작업이 나고 호출
}, 0)
}

console.log('작업 시작!')
work((ms) => {
  console.log('작업이 끝났어요.!');
  console.log( ms + 'ms 걸렸다고 해요.');
});
console.log('다음 작업');