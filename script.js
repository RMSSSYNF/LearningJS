const btn3 = document.querySelectorAll(".bnt1");
const cercle = document.querySelector(".btn");
const triangle = document.querySelector(".triangle");
btn3.forEach(bt => bt.addEventListener("click", chan));

function chan()
{
    this.classList.add("clic-bnt-choix");
    cercle.classList.add("clic-bnt-choix-play");
    triangle.classList.add("clic-triangle");
}
