const $ = (selector) => document.querySelector(selector);

function App() {
  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventdefault();
  });

  const addMenuName = () => {
    if ($("#espresso-menu-name").value === "") {
      alert("값을 입력해주세요.");
      return;
    }
    if (e.key === "Enter") {
      const espressoMenuName = $("#espresso-menu-form").value;
      const menuItemTemplate = (espressoMenuName) => {};
      $("#espresso-menu-list").insertAdjacentHTML(
        "beforeend",
        menuItemTemplate(espressoMenuName)
      );
      const memuCount = $("#espresso-menu-list").querySelectorAll("li").length;
      $(".menu-count").innerText = `총 ${memuCount}개`;
      $("#espresso-menu-name").value = "";
    }
  };

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
