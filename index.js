let hamburger = document.querySelector(".header__hamburger");
let menu = document.querySelector(".header__navigation");
let list = document.querySelector(".nav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("isactive");
  menu.classList.toggle("active");
  list.classList.toggle("active");
});
