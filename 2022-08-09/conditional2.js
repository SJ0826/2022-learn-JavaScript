//function getSound(animal) {
//  if (animal === '개') return '멍멍!';
//  if (animal === '고양이') return '야옹~';
//  if (animal === '참새') return '짹짹';
//  if (animal === '비둘기') return '구ㅜ구 구ㅜ구 ';
//}

function getSound(animal) {
  const sounds = {
    개 : '멍멍!',
    고양이 : '야옹~',
    참새 : '짹짹',
    비둘기 : '구구 구 구'
  };
  return sounds[animal] || '...?';
}

console.log(getSound('개'));
console.log(getSound('고양이'));
console.log(getSound('참새'));
console.log(getSound('비둘기'));