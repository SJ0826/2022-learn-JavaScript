/*
1. 사용자가 텍스트 인풋에서 텍스트를 추가한다.
2. 사용자가 버튼을 클릭하거나 엔터키를 치면 아이템을 등록한다.
3. 쓰레기통 아이템을 클릭하면 아이템이 삭제된다.
*/

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아온다.
  const text = input.value; // value를 이용해서 값을 받아 text에 할당.
  if(text === '') {
    input.focus();
    return;
  }
  // 2. 새로운 아이템을 만든다. (텍스트 + 삭제버전)
  const item = createItem(text);
  // 3. 아이템 컨테이너안에 새로만든 아이템을 추가한다.
  items.appendChild(item);
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block: 'center'});
  // 5. 인풋을 초기화한다.
  input.value = '';
  input.focus(); // 사용자가 계속 입력할 수 있게 함.

}

let id = 0; //글로벌 숫자변수를 이용해서 아이디를 만듦.
function createItem(text) {
  const itemRow = document.createElement('li'); //li요소 추가
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
        <div class="item" data-id=${id}>
          <span class="item__name">${text}</span>
          <button class="item__delete" >
            <i class="fa-solid fa-trash-can" data-id=${id}></i>
          </button>
        </div>
        <div class="itme__divider"></div>`;
  id++; // 아이템이 새로만들어질 때마다 증가.
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', event => { 
  const id = event.target.dataset.id;
  if(id) { //nodeName이 I일때만 실행
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }

});

