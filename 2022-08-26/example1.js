function a () {
  var b;// 수집 대상 1. 변수는 선언부만 끌어올립니다.
  function b() {} // 수집 대상 2. 함수 선언은 전체를 끌어올립니다.

  console.log(b);
  b = 'bbb';
  console.log(b);
  console.log(b);
}
a();