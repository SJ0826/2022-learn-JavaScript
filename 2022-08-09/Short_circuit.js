// 단축 평가 논리계산법
// 논리 연산자를 통해서 코드를 더 짧게 쓰는것을 의미한다.

const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal && animal.name; //animal이 true라면 animal.name을 return한다. false라면 결과는 false가 된다.
}

const name = getName(dog);
console.log(name);
