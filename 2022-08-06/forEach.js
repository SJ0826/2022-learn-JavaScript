const superheroes = [
  '아이언맨',
  '캡틴 아메리카',
  '닥터 스트레인지'
]

function print(hero) {
  console.log(hero);
}

superheroes.forEach(print);
superheroes.forEach(function(hero) {
  console.log(hero);
});

superheroes.forEach(hero => {
  console.log(hero);
});