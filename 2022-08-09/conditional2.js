//function getSound(animal) {
//  if (animal === '개') return '멍멍!';
//  if (animal === '고양이') return '야옹~';
//  if (animal === '참새') return '짹짹';
//  if (animal === '비둘기') return '구ㅜ구 구ㅜ구 ';
//}
// 객체를 활용한 조건문
// 넣어주는 값에 따라 반환하는 값이 다른 경우 객체를 사용하면 편하다.


function makeSound(animal) {
  const tasks = {
    개 : () => {
      console.log('멍멍!');
    },
    고양이() {
      console.log('야옹!');
    },
    비둘기() {
      console.log('구구 구구');
    }
  }

  const task = tasks[animal];
  if (!tasks) {
    console.log('...?');
    return;
  }
  console.log(task);
}


makeSound('개');
makeSound('비둘기');
makeSound('인간');