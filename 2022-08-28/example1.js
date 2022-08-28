var count = 0;
var cbFuc = function () {
  console.log(count);
  if(++count > 4 ) clearInterval(timer);
};
var timer = setInterval(cbFuc, 300);