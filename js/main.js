const menuBtn = document.querySelector(".menu");
const burgerBtn = document.querySelector(".menu__burger");
const navbar = document.querySelector(".navbar");
const list = document.querySelector(".list");
const logo = document.querySelector(".logo");
const item = document.querySelector(".list__item");
const wrapper = document.querySelector(".wrapper");
const content = document.querySelector(".design_content");

let showMenu = false;
menuBtn.addEventListener("click", () => {
  if (!showMenu) {
    burgerBtn.classList.add("open");
    navbar.classList.add("open");
    list.classList.add("open");
    logo.classList.add("open");
    item.classList.add("open");
    wrapper.classList.add("open");

    showMenu = true;
  } else {
    burgerBtn.classList.remove("open");
    navbar.classList.remove("open");
    list.classList.remove("open");
    logo.classList.remove("open");
    item.classList.remove("open");
    wrapper.classList.remove("open");

    showMenu = false;
  }
});
