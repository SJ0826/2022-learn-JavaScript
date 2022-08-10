// rest
// 객체, 배열, 함수의 파라미터에서 사용한다.

const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...cuteSlime } = purpleCuteSlime; //  color를 제외한 나머지 값이 rest를 통해서 객체 비구조화가 이루어짐.
console.log(color);
console.log(rest);

const { attribute, ...Slime } = cuteSlime;
console,log(Slime);
