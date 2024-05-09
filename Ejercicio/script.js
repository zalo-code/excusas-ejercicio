let who = ['El vecino', 'El profesor', 'El bibliotecario', 'El cocinero', 'El jardinero'];
let what = ['se gastó', 'depositó', 'perdió', 'contó', 'guardó'];
let when = ['durante el receso', 'justo antes del cierre del banco', 'en medio de la feria', 'antes de que abriera el mercado', 'cuando revisaba la cuenta online'];

function excuseGenerator(quien, que, cuando){
    numQuien = Math.floor(Math.random() * quien.length);
    numQue = Math.floor(Math.random() * que.length);
    numCuando = Math.floor(Math.random() * cuando.length);
    return quien[numQuien] + " " + que[numQue] + " " + "mi dinero" + " " + cuando[numCuando];
}
function onLoad(){
    var excusa = document.getElementById('excusa');
    excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;