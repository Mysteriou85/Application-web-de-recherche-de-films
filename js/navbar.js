let btnBurger = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');

btnBurger.onclick = function () {
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function () {
    sidebar.classList.toggle("active");
}

let paginationLeft = document.querySelector(".nextLeft");
let paginationRight = document.querySelector("nextRight");