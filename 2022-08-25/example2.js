var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user = {
  name: 'Jaenam',
  urls: {
    portfolio: 'http://github.con/abc',
    blog: 'http://blog.com',
    facebood: 'http://facebook.con/abc'
  }
};
var user2 = copyObject(user);

user.name = 'Jung';
console.log(user.name === user2.name); //false

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio); // true

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog); //true

