//spread: 객체 도는 배열을 펼친다. 기존의 객체를 이용해서 새로운 객체를 만든다.

const slime = {
  name: '슬라임'
}

const cuteSlime = {
  ...slime,
  attribute: 'cute'
}

const purpleCuteSlime ={
  ...cuteSlime,
  color: 'purple'
}

const greenCuteslime = {
  ...purpleCuteSlime,
  color: 'green'
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
