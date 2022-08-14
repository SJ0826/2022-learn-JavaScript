//keypress는 더이상 최신버전에서 지원하지 않음.
// keydown: 키를 누르는 순간 이벤트 발생
// keyup: 키를 누르다가 손을 뗸 순간 발생;

input.addEventListener('keydown', (event) => {
  if(event.key === 'a') {
    event.preventDefault();
  }
}); // 눌렀을때 이벤트가 발생했기 때문에 입력이 되지 않음.

input.addEventListener('keyup', (event) => {
  if(event.key === 'a') {
    event.preventDefault();
  }
}); // 눌린 후에 이벤트가 발생했기 때문에 입력이 됨.