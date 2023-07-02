const btn3 = document.querySelectorAll(".bnt1");
const cliquer = document.querySelector(".btn");
const triangle = document.querySelector(".triangle");
btn3.forEach(bt => bt.addEventListener("click", chan));

function chan()
{
    this.classList.add("clic-bnt-choix");
    cliquer.classList.add("clic-bnt-choix-play");
    triangle.classList.add("clic-triangle");
    
}

cliquer.addEventListener("click", ouvre);
const Sup = document.querySelector(".contener-head");
const Inf = document.querySelector(".contener-footer");

const divCases = document.querySelector(".carreaux-jeux");
const footerJeux = document .querySelector("footer");

function ouvre(){
    Sup.classList.add("btn-ouverture-sup");
    Inf.classList.add("btn-ouverture-inf");
    setTimeout(function(){Inf.style.display='none'},600);
    setTimeout(function(){Sup.style.display='none'},600);
    setTimeout(function(){cliquer.style.display='none'},600);
    setTimeout(function(){divCases.classList.add("carreaux-jeux-active")},700);
    setTimeout(function(){footerJeux.classList.add("footer-active")},750);   
}

const btnFirst = document.querySelector(".first");
const cases = document.querySelectorAll(".cse");
console.log(cases[0]);
cases.forEach(cs => cs.addEventListener("click", ecrr));
let cmp =0;
function ecrr(){
if(cmp%2 === 0 && this.innerText===""){
    this.innerText="X";
    if(checkWin()) {
        disabledBords();
        btnFirst.innerHTML='JOUER 1 a gagné &#x1F642;';
    }
    else btnFirst.innerText='JOUER 1';
    cmp++; 
}
else if(cmp%2 !== 0 && this.innerText==="") { 
    this.innerText="O"; 
    if(checkWin()) {
        disabledBords();
        btnFirst.innerHTML='JOUER 2 a gagné &#x1F642;';
    }
    else btnFirst.innerText='JOUER 2';
    cmp++;
}
if(cmp == 9) btnFirst.innerText='JEUX TERMINE';
// if(checkWin()) alert("Lheuereux elus !!!!");
}

function checkWin(){
    var TableWin = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for( let i =0; i< TableWin.length; i++){
        var [a,b,c] = TableWin[i];
        if(cases[a].innerText !=="" && cases[a].innerText===cases[b].innerText && cases[a].innerText === cases[c].innerText) return true;
    }
    return false;
}

function disabledBords(){
    cases.forEach(function(cs){
        cs.onlick = null;
    });
}