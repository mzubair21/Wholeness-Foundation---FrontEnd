const item = document.querySelectorAll(".menu");

item.forEach((link) => {
  link.addEventListener("click", function () {
    link.parentNode.children[1].classList.toggle("active");
  });
});

const item2 = document.querySelector(".burger-menu");
const item3 = document.querySelector(".nav");

item2.addEventListener("click", function () {
  item2.classList.toggle("active");
  item3.classList.toggle("active");
});

const button = document.querySelector(".bottom-search-btn");
const search = document.querySelector(".bottom-search");

button.addEventListener("click", function () {
  search.classList.toggle("active");
});
