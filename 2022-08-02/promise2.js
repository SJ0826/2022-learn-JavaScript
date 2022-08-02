/*
p 라는 프로미스 객체는 1000ms 후에 fulfilled 됩니다.
*/

/*
p 라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다.
*/

const p = new Promise((resolve, reject) =>{
    /*pending*/
    setTimeout(() => { //setTimeout: 만료된 후 함수나 지정한 코드 조각을 실행하는 타이머를 설정합니다.
        resolve(); //fuluilled
    }, 1000 );
});

p.then(/*callback*/);