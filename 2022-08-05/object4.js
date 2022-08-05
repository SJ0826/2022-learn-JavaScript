// 객체 안에 함수 넣기

const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say: function say() { //함수이름 생략가능. arrow함수는 불가.
        console.log(this.sound);// this가 가르키는 것은 함수의 객체, 자기자신.
    }
};

const cat = {
    name: '야옹이',
    sound: '야옹~'
};

cat.say = dog.say;
dog.say();
cat.say();

const catSay = cat.say;
catSay();