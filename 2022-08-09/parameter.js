// 함수의 기본 파라미터
// 파라미터값을 넣어주지 않았을 때 기본값으로 사용하는 값을 지정.

const  calculateCircleArear = (r = 1)  => { // 파라미터의 기본값 지정
  return Math.PI = r * r;
}

const area = calculateCircleArear();
console.log(area);