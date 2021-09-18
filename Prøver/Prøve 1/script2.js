var inpSmittet = document.getElementById("inpSmittet");
var inpVekst = document.getElementById("inpVekst");
var btnRegn = document.getElementById("btnRegn");
var tekst = document.getElementById("tekst");
var tekst1 = document.getElementById("tekst1");

btnRegn.onclick = function() {

    var smittet = Number(inpSmittet.value);
    var regneVekst = Number(inpVekst.value);
    var vekst = regneVekst/100+1;
    var antallSmittet = 0;

    for(i = 1; smittet < 10000; i++) {
        antallSmittet = smittet*vekst;
        tekst.innerHTML += "Uke " + i + ": Smittet er " + Math.round(antallSmittet) + "<br>";
        smittet = antallSmittet;
    }
}