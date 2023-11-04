const burgers = document.querySelectorAll(".burger");
const links = document.querySelectorAll(".link");
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
links.forEach(function(link) {
  link.addEventListener("click", function(event) {
    let linkText = event.target.textContent;
    let nextContent = event.target.getAttribute("data-next");
    localStorage.setItem('linkText', linkText);
    localStorage.setItem('nextContent', nextContent);
  });
});