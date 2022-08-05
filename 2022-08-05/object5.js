//getter와 setter 함수
//특정값을 바꾸거나 실행하려고 할 때 사용한다.


const numbers = {
    a: 1,
    b: 2,
    get sum(){ //Getter함수는 특정 값을 실행이 아닌 조회하려고 할때 사용한다.
        console.log('sum함수가 실행됩니다.');
        return this.a + this.b;
    }
};

console.log(numbers.sum);

numbers.b = 5;
console.log(numbers.sum);