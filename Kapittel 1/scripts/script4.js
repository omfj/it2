var parListeA = document.getElementById("parListeA");
var parListeB = document.getElementById("parListeB");
var parListeC = document.getElementById("parListeC");

var listeA= [];
var listeB= [];
var listeC= [];

var parError = document.getElementById("parError");
var inpNavn = document.getElementById("inpNavn");
var inpPoeng = document.getElementById("inpPoeng");
var btnLeggtil = document.getElementById("btnLeggtil");

var telling = 0;

btnLeggtil.onclick = function () {

	navn = inpNavn.value;
	poeng = inpPoeng.value;

	navn.bold();
	poeng.bold();

	telling++;

	console.log(navn);
	console.log(poeng);
	console.log(telling);

	if(poeng > 0 && poeng < 11) {
		varListA = navn.bold() + " har " + poeng.bold() + " poeng.";
		listeA.push(varListA);
		parListeA.innerHTML += listeA[listeA.length-1] + "<br>";

		parError.innerHTML = "";
	}

	if(poeng > 11 && poeng < 21) {
		varListB = navn.bold() + " har " + poeng.bold() + " poeng.";
		listeB.push(varListB);
		parListeB.innerHTML += listeB[listeB.length-1] + "<br>";

		parError.innerHTML = "";
	}

	if(poeng > 21 && poeng < 31) {
		varListC = navn.bold() + " har " + poeng.bold() + " poeng.";
		listeC.push(varListC);
		parListeC.innerHTML += listeC[listeC.length-1] + "<br>";

		parError.innerHTML = "";
	}

	if(poeng > 30 || poeng < 1) {
		parError.innerHTML = "Poeng må være over 0 og mindre enn 31."
	}
}