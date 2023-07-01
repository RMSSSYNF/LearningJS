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

const divCases = document.querySelector(".carreaux-jeux");
const footerJeux = document .querySelector("footer");

function verfication() {
    
}

function ouvre(){
    Sup.classList.add("btn-ouverture-sup");
    Inf.classList.add("btn-ouverture-inf");
    setTimeout(function(){Inf.style.display='none'},600);
    setTimeout(function(){Sup.style.display='none'},600);
    setTimeout(function(){cliquer.style.display='none'},600);
    setTimeout(function(){divCases.classList.add("carreaux-jeux-active")},700);
    setTimeout(function(){footerJeux.classList.add("footer-active")},750);   
}

// divCases.style.display='flex'; 
// footerJeux.style.display='flex';
const btnFirst = document.querySelector(".first");
const cases = document.querySelectorAll(".cse");
console.log(cases[0]);
cases.forEach(cs => cs.addEventListener("click", ecrr));
let cmp =0;
function ecrr(){
if(cmp%2 === 0 && this.innerText===""){
    this.innerText="X";
    btnFirst.innerText='JOUER 1';
    cmp++;
}
else if(cmp%2 !== 0 && this.innerText==="") { this.innerText="O"; btnFirst.innerText='JOUER 2';cmp++;}
//if(cases[0].innerText==cases[3].innerText && cases[3].innerText==cases[6].innerText || cases[0].innerText==cases[3].innerText && cases[3].innerText==cases[6].innerText) alert("bonjour");
if(cases[0].innerText==cases[3].innerText && cases[3].innerText==cases[6].innerText || cases[1].innerText==cases[4].innerText && cases[4].innerText==cases[7].innerText || cases[2].innerText==cases[5].innerText && cases[5].innerText==cases[8].innerText || cases[0].innerText==cases[1].innerText && cases[1].innerText==cases[2].innerText || cases[3].innerText==cases[4].innerText && cases[4].innerText==cases[5].innerText || cases[6].innerText==cases[7].innerText && cases[7].innerText==cases[8].innerText || cases[0].innerText==cases[4].innerText && cases[4].innerText==cases[8].innerText || cases[2].innerText==cases[4].innerText && cases[4].innerText==cases[6].innerText){
alert("gagné!!!!");
}

if(cmp == 9) alert("Le jeux est fini");
}

// function attente(a,b,c){
//     a.style.display='none';
//     b.style.display='none';
//     c.style.display='none';
// }