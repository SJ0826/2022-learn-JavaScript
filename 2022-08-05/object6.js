//Setter함수

const dog = {
    _name: '멍멍이',
    get name() {
    console.log('_name을 조회합니다..');
    return this._name;
    },
    set name(value) { //파라미터값 설정은 필수
        console.log('이름이 바뀝니다..' + value);
        this._name = value;
    }
};

console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog._name);