var i;
var parTekst = document.getElementById("parTekst");
var navnLeggtil = document.getElementById("navnLeggtil");
var knappLeggtil = document.getElementById("knappLeggtil");
var tekst1 = "";
var nyttNavn = "";
var navn = ["Jens", "Karius", "Baktus", "Kaktus", "Oystein", "Havard"];

var knapp = document.getElementById("knapp");
var randomNavn = document.getElementById("randomNavn");
var kast = document.getElementById("kast");
var antallKast = 0;

var navnObjekt = document.getElementById("navnObjekt");
var knappObjekt = document.getElementById("knappObjekt");
var tekst2 = document.getElementById("tekst2");

for (i = 0; i < navn.length; i++) {
  tekst1 += "En elev er: " + navn[i] + "<br>";
}

knappLeggtil.onclick = function() {
  nyttNavn = navnLeggtil.value;
  navn.push(nyttNavn);
  parTekst.innerHTML += "Det er også enda en elev: " + navn[navn.length-1] + "<br>";
}

parTekst.innerHTML = tekst1;

//--------//

knapp.onclick = function () {
    antallKast++;
    var randomTall = Math.floor(Math.random()*navn.length);
    randomNavn.innerHTML = "Du fikk: " + navn[randomTall];
    kast.innerHTML = "Du har kastet: " + antallKast + " ganger.";

    console.log(randomTall);
}

//--------//

var objekt = {
  navn: "Ole Magnus",
  alder: 10,
  hobby: "Lego",
};

tekst2.innerHTML = "Denne historien handler om " + objekt.navn + ". Han er " + objekt.alder + " år. Neste år er han " + (objekt.alder+1) +" år. Han liker å holde på med " + objekt.hobby.toUpperCase();

knappObjekt.onclick = function() {
  objekt.navn = navnObjekt.value;
  tekst2.innerHTML = "Denne historien handler om " + objekt.navn + ". Han er " + objekt.alder + " år. Neste år er han " + (objekt.alder+1) +" år. Han liker å holde på med " + objekt.hobby.toUpperCase();
}