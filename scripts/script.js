const toggle = document.querySelector(".toggle");
const close = document.querySelector(".close");
const menu = document.querySelector("ul");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
  body.classList.add(".lock-scroll");
});

close.addEventListener("click", function () {
  menu.classList.remove("active");
});
