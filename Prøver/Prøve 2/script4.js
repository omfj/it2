var btnPar = document.getElementById("btnPar");
var parTekst1 = document.getElementById("parTekst1");
var parTekst2 = document.getElementById("parTekst2");
var imgMann = document.getElementById("imgMann");
var imgDame = document.getElementById("imgDame");
var minM = 1;
var maxM = 5;
var minD = 6;
var maxD = 10;

var mann = ["Ingen", "Martin", "Olav", "Trygve", "Markus", "Stein"];
var dame = ["Ingen", "Johanna", "Kristine", "Stine", "Andrea", "Kim"];

btnPar.onclick = function() {
    randomM = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    imgMann.src = randomM + ".png";

    parTekst1.innerHTML = "Navn: " + mann[randomM];

    randomD = Math.floor(Math.random() * (maxD - minD + 1) ) + minD;
    imgDame.src = randomD + ".png";

    parTekst2.innerHTML = "Navn: " + dame[randomD - 5];
}
