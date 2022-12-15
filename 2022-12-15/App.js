const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  getLocalStarage() {
    localStorage.getItem("menu");
  },
};

function App() {
  this.menu = [];

  const updateMenuCount = () => {
    const memuCount = $("#espresso-menu-list").querySelectorAll("li").length;
    $(".menu-count").innerText = `총 ${memuCount}개`;
  };

  const addMenuName = () => {
    if ($("#espresso-menu-name").value === "") {
      alert("값을 입력해주세요.");
      return;
    }
    if (e.key === "Enter") {
      const espressoMenuName = $("#espresso-menu-form").value;
      this.menu.push({ name: espressoMenuName });
      const template = this.menu.map((item) = {
        return `
        <li class="menu-list-item d-flex items-center py-2">
        <span class="w-100 pl-2 menu-name ">${item.name}</span>
          <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
          >
            수정
          </button>
          <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
          >
            삭제
          </button>
        </li>`
      }). join('')

      $("#espresso-menu-list").innerHTML = template;
      updateMenuCount();
      $("#espresso-menu-name").value = "";
    }
  };

  const updateMenuName = () => {
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const menuName = $menuName.innerText;
    const updatedMenuName = prompt("메뉴명을 수정하세요", menuName);
    $menuName.innerText = updatedMenuName;
  };

  const removeMenuName = () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      e.target.closest("li").remove();
      updateMenuCount();
    }
  };

  $("#espresso-menu-list").addEventListener("click", (e) => {
    // event bubbling
    if (e.target.classList.contains("memu-edit-button")) {
      updateMenuName(e);
    }

    if (e.target.classList.contains("menu-remove-button")) {
      removeMenuName(e);
    }
  });

  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventdefault();
  });

  $("#espresso-menu-submit-button").addEventListener("keypress", (e) => {
    addMenuName();
  });

  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
      return;
    }
    addMenuName();
  });
}

App();
