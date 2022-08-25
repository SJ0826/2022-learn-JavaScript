var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === 'object' && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
     result = target;
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

var user2 = copyObjectDeep(user);


user.name = 'Jung';
console.log(user.name === user2.name); //false

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio); // false

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog); //false
