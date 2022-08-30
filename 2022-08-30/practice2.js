class User {

  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("이름이 너무 짧습니다.");
      return;
    }
    this._name = value;
  }

}

let user = new User("보라");
console.log(user.name);

user = new User("");