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

const cliquer = document.querySelector(".btn");

cliquer.addEventListener("click", ouvre);
const Sup = document.querySelector(".contener-head");
const Inf = document.querySelector(".contener-footer");

function ouvre(){
    Sup.classList.add("btn-ouverture-sup");
    Inf.classList.add("btn-ouverture-inf");
    setTimeout(function(){Inf.style.display='none'},600);
    setTimeout(function(){Sup.style.display='none'},600);
    setTimeout(function(){cliquer.style.display='none'},600);
}
// function attente(a,b,c){
//     a.style.display='none';
//     b.style.display='none';
//     c.style.display='none';
// }