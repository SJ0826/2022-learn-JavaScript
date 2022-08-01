//prototype

function Person(name, age) {
    this.name = name;
    this.age = age;
    //this.hello = function() {
    //    console.log('hello', this.name, this.age);
    //}
}

Person.prototype.hello = function() {
    console.log('hello', this.name, this.age);
}

const p = new Person('Mark', 37);

p.hello();
console.log(p.toString()); //작성하지 않았지만 호출할 수 있는 함수

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person); // P라는 객체가 Person에서 나온 인스턴스인가?
console.log(p instanceof Object); // p라는 객체가 Object에서 나온 인스턴스인가?``
