// 객체의 가변성에 따른 문제점 해결 방법
// 문제점: 대상 객체의 프로퍼티가 많을수록, 변경해야 할 정보가 많을수록 사용자가 입력하는 수고가 늘어난다.
var user ={
  name: 'Jaenam',
  gender: 'male'
};

var changeName = function (user, newName) {
  return { //change 함수가 새로운 객체를 반환.
    name: newName,
    gender: user.gender
  };
};

var user2 = changeName(user, 'Jung');

if(user !== user2 ) {
  console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name);  // Jaenam Jung
console.log(user === user2) // fakse

