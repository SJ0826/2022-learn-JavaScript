function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("보라");

console.log(user.name);
console.log(user.isAdmin);