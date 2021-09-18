var parTekst = document.getElementById("parTekst");
var navnLeggtil = document.getElementById("navnLeggtil");
var knappLeggtil = document.getElementById("knappLeggtil");
var inpAntall = document.getElementById("inpAntall");
var knappLeggtil2 = document.getElementById("knappLeggtil2");
var knapp2 = document.getElementById("knapp2");

var i;
var tekst1 = "";
var nyttNavn = "";
var lengde = 0;
var lengst;
var navn = ["Jens", "Karius", "Baktus", "Kaktus", "Oystein", "Havard"];

btnAlt.onclick = function() {
    for (i = 0; i < navn.length; i++) {
      tekst1 += navn[i] + "<br>";
      parTekst.innerHTML = tekst1;
    }
}

knappLeggtil.onclick = function() {
  nyttNavn = navnLeggtil.value;
  navn.push(nyttNavn);
  parTekst.innerHTML += navn[navn.length-1] + "<br>";
}

knappLeggtil2.onclick = function () {
    antall = inpAntall.value;
    if (antall > navn.length) {
        parTekst.innerHTML = "Det er ikke et gyldig tall. Max er: " + navn.length;
    } else {
        for (i = 0; i < antall; i++) {
            tekst1 += navn[i] + "<br>";
            parTekst.innerHTML = tekst1;
        }
    }
}

knapp2.onclick = function () {
    for (i = 0; i < navn.length; i++){
        if(navn[i].length > lengde){
            lengde = navn[i].length;
            lengst = navn[i];
            parTekst.innerHTML = lengst;
        }
    }      
} 