var parTekst = document.getElementById("parTekst");
var inpSum = document.getElementById("inpSum");
var btnKast = document.getElementById("btnKast");
var kasttall = document.getElementById("kasttall");
		
function = kasteterning(){

    var antallKast = 1;
    var sum = Number(inpSum.value);
    var terningEn = Math.floor(Math.random()*6+1);
    var terningTo = Math.floor(Math.random()*6+1);
    var kastSum = terningEn + terningTo;
    var i = 0;

    console.log(terningTo);
    console.log(terningEn);
    console.log(sum);
    console.log(kastSum);

    kasttall.innerHTML = "Du har nå kastet.";

    while(i < 10) {
        terningEn = Math.floor(Math.random()*6+1);
        terningTo = Math.floor(Math.random()*6+1);
        kastsum = terningTo + terningEn;

        parTekst.innerHTML = "Du har kastet " + i + " ganger. Terninnene blir " + kastsum;

        i++;
    }
}