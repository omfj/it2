var inpNavn = document.getElementById("inpNavn");
var inpAlder = document.getElementById("inpAlder");
var btnLeggtil = document.getElementById("btnLeggtil");
var pTekst = document.getElementById("pTekst");
var kast = document.getElementById("kast");
var navn = "Ingen navn";
var alder = 0;
var telling = 0;

console.log(navn);
console.log(alder);

btnLeggtil.onclick = function() {
    telling++;
    navn = inpNavn.value;
    alder = inpAlder.value;
    kast.innerHTML = "Du har trykket " + telling + " ganger";

    console.log(navn);

    if(navn == "Harald") {
        if(alder == 50 || alder == 60) {
            pTekst.innerHTML = "Hei Harald, feiret den store dagen enda?";
        } else {
            pTekst.innerHTML = "Du har samme navn som kongen!";
        }
    } else if(navn == "Lise" && alder > 0 && alder < 6) {
        pTekst.innerHTML = "Hei Lise, har du vært i barnehagen?";
    } else if(alder == 50 || alder == 60) {
        pTekst.innerHTML = "Hei " + navn + ", har du feiret den store dagen?";
    } else {
        pTekst.innerHTML = "Hei " + navn + ", du er " + alder + " år.";
    }

    if(telling == 5) {
        var element = document.getElementById("btnLeggtil");
        element.parentNode.removeChild(element);
        pTekst.innerHTML = "Du har kan ikke bruke denne tingen mer.";
    }

    if(alder > 69) {
        pTekst.style.fontSize = "xx-large";
    } else {
        pTekst.style.fontSize = "medium";
    }
}