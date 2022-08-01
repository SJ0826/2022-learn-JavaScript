// prototype 상속

function Person() {

}

Person.prototype.hello = function() {
    console.log('hello');
}

function Korean(region) {
    this.region = region;
    this.where = function() {
        console.log('where', this.region);
    };
}

Korean.prototype = Person.prototype; // 프로토타입을 이용해 부모의 프로퍼티를 자식의 프로퍼티에 할당

const k = new Korean('Seoul');

k.hello();
k.where();

console.log(k instanceof Korean);// 프로토타입 체인: 프로토타입을 상속하면서 이어져 있는 집합
console.log(k instanceof Person);
console.log(k instanceof Object);