const nav = document.querySelector(".elements");
const btn = document.querySelector(".lines");
const lines = document.querySelectorAll(".span");

function alter() {
    nav.classList.toggle("sidebar");
    lines[0].classList.toggle("line-0");
    lines[1].classList.toggle("line-1");
    lines[2].classList.toggle("line-2");
}

btn.addEventListener("click", alter);