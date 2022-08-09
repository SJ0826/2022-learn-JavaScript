// 삼항연산자를 여러번 중첩해서 사용가능

const condition1 = false;
const condition2 = false;

const value = condition1
  ? '와우!'
  : condition2
    ? 'blabla'
    :'foo'

console.log(value); //foo출력

// 삼항연산자를 남발하면 보기 헷갈리니까 가급적 한번만 쓰자.