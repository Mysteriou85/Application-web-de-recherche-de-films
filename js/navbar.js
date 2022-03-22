let btnBurger = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let home = document.querySelector(".fond-mobile");

btnBurger.onclick = function () {
  sidebar.classList.toggle("active");
  home.classList.toggle("affiche");
};

searchBtn.onclick = function () {
  sidebar.classList.toggle("active");
  home.classList.toggle("affiche");
};
home.onclick = function () {
  sidebar.classList.remove("active");
  home.classList.remove("affiche");
};

let paginationLeft = document.querySelector(".nextLeft");
let paginationRight = document.querySelector("nextRight");
