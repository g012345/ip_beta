const burgers = document.querySelectorAll(".burger");
<<<<<<< HEAD
const link = document.getElementById("myLink");
=======

>>>>>>> c9d2eab4562ec31b572d152e7cf31504dbb6fdf2
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
<<<<<<< HEAD
link.addEventListener("click", function(event) {
    let linkText = event.target.textContent;
    console.log(linkText)
});
=======
>>>>>>> c9d2eab4562ec31b572d152e7cf31504dbb6fdf2
