// 비구조화 할당 (구조 분해)
// 객체 비구조화 할당을 이용해 이름을 바꿀 수 잇다.
const animal = {
  name: '멍멍이',
  type: '개'
};

const { name: nickname } = animal; // animal의 name을 nickname이라고 부르겠다.

console.log(nickname);
console.log(animal);