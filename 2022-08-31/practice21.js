let user = {
  name: "John",
  hi() { alert(this.name); },
  bye() { alert("Bye"); }
};

user.hi(); 

(user.name == "John" ? user.hi : user.bye)();