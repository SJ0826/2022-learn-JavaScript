setTimeout(function () { console.log(this); }, 300);

[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this, x);
});

