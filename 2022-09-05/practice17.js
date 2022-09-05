class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => { // 수정한 부분
    alert(this.value);
  }
}

let button = new Button("안녕하세요.");

setTimeout(button.click, 1000);