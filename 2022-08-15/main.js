'use strict'

const CARROT_SIZE = 80;

//재생버튼 클릭하면 당근과 벌레 위치 랜덤
//init()를 호출하면 당근고 벌레들을 랜덤으로 game feid에 배치

const field  = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();

function initGame() {
  // 벌레와 당근을 생성한 뒤 feild에 추가해준다.
  console.log(fieldRect);
  addItem('carrot', 5, 'carrot.png');
  addItem('bug', 5, 'bug.png');
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;

  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    const x = randomNumber(x1, x2);
    const y =randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max-min) + min;
}
initGame();
