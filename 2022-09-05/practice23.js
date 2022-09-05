// 클래스 생성
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.on("select", value => alert(`선택된 값: ${value}`));

menu.choose("123");