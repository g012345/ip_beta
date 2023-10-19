const burgers = document.querySelectorAll(".burger");

burgers.forEach(burger => {
  burger.addEventListener("click", () => {
    const targetId = burger.getAttribute("data-target");
    const menu = document.querySelector(`#${targetId}`);

    if (menu.classList.contains("disp")) {
      menu.classList.remove("disp");
    } else {
      menu.classList.add("disp");
    }
  });
});
