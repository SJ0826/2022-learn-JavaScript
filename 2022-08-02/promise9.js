/*
then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 적업을 순차적으로 아래로 표현할 수 있습니다.
then 에 함수를 넣는 여러 방법을 확인합니다.
*/

function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

p().then(() => {
    return p(); // 다시 새로운 프로미스 객체를 만들어서 리턴한다.
})
.then(() => p())
.then(p)
.then(() => {
    console.log('4000ms 후에 fulfilled 됩니다.');
});