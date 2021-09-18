var inpAntallBarn = document.getElementById("inpAntallBarn");
var inpAntallVoksne = document.getElementById("inpAntallVoksne");
var rbOkonomi = document.getElementById("rbOkonomi");
var rbBasis = document.getElementById("rbBasis");
var rbPremium = document.getElementById("rbPremium");
var btnBestill = document.getElementById("btnBestill");
var btnInfo = document.getElementById("btnInfo");
var parTekst1 = document.getElementById("parTekst1");
var parTekst2 = document.getElementById("parTekst2");
var parTekst3 = document.getElementById("parTekst3");

btnBestill.onclick = function() {

    var barnAntall = Number(inpAntallBarn.value);
    var voksAntall = Number(inpAntallVoksne.value);
    var totalAntall = barnAntall + voksAntall;
    var katogori = "";
    var rabatt = 0;

    if(rbOkonomi.checked) {
        var skOkonomiBarn = barnAntall * 2000;
        var skOkonomiVoks = voksAntall * 3000;
        var pris = (barnAntall * 2500) + (voksAntall * 4000);
        katogori = "Økonomi";

        if(totalAntall > 5) {
            pris = pris * 0.9;
            rabatt = pris - skOkonomiVoks - skOkonomiBarn;
        }
        if(totalAntall > 10) {
            parTekst1.innerHTML = "Du kan bare bestille 10 kort!";
            pris = 0;
            skPremiumBarn = 0;
            skPremiumVoks = 0;
        }

        console.log("----------Økonimi logg----------")
        console.log("Pris barn: " + skOkonomiBarn);
        console.log("Pris voksne: " + skOkonomiVoks);
        console.log("Antall sesongkort: " + totalAntall);
        console.log("Pris: " + pris);
        console.log("Rabatt: " + rabatt);
        console.log("----------")
    }

    if(rbBasis.checked) {
        var skBasisBarn = barnAntall * 2500;
        var skBasisVoks = voksAntall * 4000;
        var pris = (barnAntall * 2500) + (voksAntall * 4000);
        katogori = "Basis";

        if(totalAntall > 5) {
            pris = pris * 0.9;
            rabatt = pris - skBasisVoks - skBasisBarn;
        }
        if(totalAntall > 10) {
            parTekst1.innerHTML = "Du kan bare bestille 10 kort!";
            pris = 0;
            skPremiumBarn = 0;
            skPremiumVoks = 0;
        }

        console.log("----------Basis logg----------")
        console.log("Pris barn: " + skOkonomiBarn);
        console.log("Pris voksne: " + skOkonomiVoks);
        console.log("Antall sesongkort: " + totalAntall);
        console.log("Pris: " + pris);
        console.log("Rabatt: " + rabatt);
        console.log("----------")
    }

    if(rbPremium.checked) {
        var skPremiumBarn = barnAntall * 3000;
        var skPremiumVoks = voksAntall * 5000;
        var pris = (barnAntall * 3000) + (voksAntall * 5000);
        katogori = "Premium";
        
        if(totalAntall > 10) {
            parTekst1.innerHTML = "Du kan bare bestille 10 kort!";
            pris = 0;
            skPremiumBarn = 0;
            skPremiumVoks = 0;
        }

        console.log("----------Basis logg----------")
        console.log("Pris barn: " + skPremiumBarn);
        console.log("Pris voksne: " + skPremiumVoks);
        console.log("Antall sesongkort: " + totalAntall);
        console.log("Pris" + pris);
        console.log("Rabatt: " + rabatt);
        console.log("----------")
    }

    btnInfo.onclick = function() {
        parTekst2.innerHTML = "Du har bestilt " + totalAntall + " billeter av type: " + katogori;
        parTekst3.innerHTML = "Disse billetene har kostet deg " + pris + ". Det er " + rabatt + " kr rabatt."
    }
}