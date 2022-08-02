//promise
/* 
ES6부터 JavaScript의 표준 내장 객체로 추가되었습니다.
ES6을 지원하는 브라우저나 Node.js에서 전역에 있는  Promise를 확인할 수 있습니다.
*/

console.log(Promise); // node.js환경에서 전역객체로 들어와있는것을 확인.

/* 
생성자를 통해서 프로미스 객체를 만들 수 있습니다.
생성자의 인자로 executor라는 함수를 이용합니다.
excutor함수는 resolve와 reject를 인자로 가집니다.
    (resolve, reject) => {...}
resolve와 reject는 함수입니다.
resolve(), reject()
*/

new Promise(/* executor */(resolve, reject) => {});

/* 
생성자를 통해서 프로미스 객체를 만드는 순간 pending(대기) 상태라고 합니다.
*/

new Promise((resolve, reject) => {}); //pending

/*
pending상태로 돌입한 후 excutor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행)상태가 됩니다.
*/

new Promise((resolve, reject) => {
    // pending상태 
    // ... 비동기적인 상황이 되는 처리가 벌어짐.
    resolve(); // fulfilled
})

/* 
excutor 함수 인자 중 하나인 reject 함수를 실행하면, rejected (거부) 상태가 됩니다.
*/

new Promise((resolve, reject) => {
    reject(); //rejected
})