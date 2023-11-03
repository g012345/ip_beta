const burgers = document.querySelectorAll(".burger");
const link = document.getElementById("myLink");
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
link.addEventListener("click", function(event) {
    let linkText = event.target.textContent;
    console.log(linkText)
});