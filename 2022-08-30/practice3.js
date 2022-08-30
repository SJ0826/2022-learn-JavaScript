class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    console.log(this.value);
  }
}

let button = new Button("안녕하세요.");

setTimeout(button.click, 1000);