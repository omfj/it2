var inpAntallVoksne = document.getElementById("inpAntallVoksne");
var inpAntallBarn = document.getElementById("inpAntallBarn");
var inpKontakt = document.getElementById("inpKontakt");
var cbMedlem = document.getElementById("cbMedlem");
var btnLeggTil = document.getElementById("btnLeggTil");
var parTekst1 = document.getElementById("parTekst1");

var antall = 0;
var barn = 0;
var voksne = 0;
var buss;
var vPris = 40;
var bPris = 20;
var bussPris = 3000;
var kontakt = "Ingen";

// Pris for voksen er 40kr og barn er 20kr. Det er maks 6 busser.
// Er man medlem i busselskapet får man 10% rabatt

btnLeggTil.onclick = function() {
    barn = Number(inpAntallBarn.value);
    voksne = Number(inpAntallVoksne.value);
    kontakt = inpKontakt.value;
    antall = voksne + barn;

    console.log(antall);
    console.log(barn);
    console.log(voksne);

    if(antall < 51) {
        buss = 1;
        if(cbMedlem.checked) {
            pris = (vPris*voksne + bPris*barn + bussPris*buss)*0.9;
        } else {
            pris = vPris*voksne + bPris*barn + bussPris*buss
        }
        parTekst1.innerHTML = kontakt + " er den registrerte kontaktperson. <br> Det er totalt " + antall + " som skal reise, " + voksne + " voksne og " + barn + " barn. Det vil bli " + pris + " kr, og ta " + buss + " buss.";
    }else if(antall > 50 && antall < 101) {
        buss = 2;
        if(cbMedlem.checked) {
            pris = (vPris*voksne + bPris*barn + bussPris*buss)*0.9;
        } else {
            pris = vPris*voksne + bPris*barn + bussPris*buss
        }
        parTekst1.innerHTML = kontakt + " er den registrerte kontaktperson. <br> Det er totalt " + antall + " som skal reise, " + voksne + " voksne og " + barn + " barn. Det vil bli " + pris + " kr, og ta " + buss + " busser.";
    }else if(antall > 100 && antall < 151) {
        buss = 3;
        if(cbMedlem.checked) {
            pris = (vPris*voksne + bPris*barn + bussPris*buss)*0.9;
        } else {
            pris = vPris*voksne + bPris*barn + bussPris*buss
        }
        parTekst1.innerHTML = kontakt + " er den registrerte kontaktperson. <br> Det er totalt " + antall + " som skal reise, " + voksne + " voksne og " + barn + " barn. Det vil bli " + pris + " kr, og ta " + buss + " busser.";
    }else if(antall > 150 && antall < 201) {
        buss = 4;
        if(cbMedlem.checked) {
            pris = (vPris*voksne + bPris*barn + bussPris*buss)*0.9;
        } else {
            pris = vPris*voksne + bPris*barn + bussPris*buss
        }
        parTekst1.innerHTML = kontakt + " er den registrerte kontaktperson. <br> Det er totalt " + antall + " som skal reise, " + voksne + " voksne og " + barn + " barn. Det vil bli " + pris + " kr, og ta " + buss + " busser.";
    }else if(antall > 200 && antall < 251) {
        buss = 5;
        if(cbMedlem.checked) {
            pris = (vPris*voksne + bPris*barn + bussPris*buss)*0.9;
        } else {
            pris = vPris*voksne + bPris*barn + bussPris*buss
        }
        parTekst1.innerHTML = kontakt + " er den registrerte kontaktperson. <br> Det er totalt " + antall + " som skal reise, " + voksne + " voksne og " + barn + " barn. Det vil bli " + pris + " kr, og ta " + buss + " busser.";
    }else if(antall > 250 && antall < 301) {
        buss = 6;
        if(cbMedlem.checked) {
            pris = (vPris*voksne + bPris*barn + bussPris*buss)*0.9;
        } else {
            pris = vPris*voksne + bPris*barn + bussPris*buss
        }
        parTekst1.innerHTML = kontakt + " er den registrerte kontaktperson. <br> Det er totalt " + antall + " som skal reise, " + voksne + " voksne og " + barn + " barn. Det vil bli " + pris + " kr, og ta " + buss + " busser.";
    }else {
        parTekst1.innerHTML = "Dere er for mange. Vi kan bare behandle max 300 stk.";
    }
 }