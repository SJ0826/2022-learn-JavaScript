const a = !true; //NOT연산자
console.log(a);

const b = true && true
console.log(b);

const c = true || false
console.log(c);


//논리연산자 우선순위
//not and or
const value = !(true && false || true && false || !false);
console.log(value);