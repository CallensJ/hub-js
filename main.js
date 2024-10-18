import "./sass/main.scss";

const dropdownLinks = document.querySelectorAll(".dropdown__link");
const allDropdownMenus = document.querySelectorAll(".dropdown__menu");

dropdownLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const dropdownMenu = link.nextElementSibling;

    allDropdownMenus.forEach((menu) => {
      if (menu !== dropdownMenu) {
        menu.classList.remove("show");
      }
    });
    dropdownMenu.classList.toggle("show");
  });
});
