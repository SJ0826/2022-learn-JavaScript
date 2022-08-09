// OR연산자는 Falsy한 값에서 자주 사용된다.
//'어떤 값이 없을 때 대신 이거 사용할래'라는 상황에서 쓰면 유용하다.

const namelessDog = {
  name: ' ',
}

function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.'; //name이 false면 '이름이 없는 동물입니다.'출력
}

const name = getName(namelessDog);
console.log(name); 

console.log(flase || 'hello');
console.log('' || '이름없다.');
console.log(null || '널이다~');
console.log(undefined | 'defined되지 않았다.');
console.log(0 || '제로다');

console.log(1 || '음?');// or연산자에서는 앞이 true면 뒤를 안본다.
