function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new User.constructor('Pete');

console.log( user2.name );