var tblBilletter = document.getElementById("tblBilletter");
var billetter = [
	{tekst:"Voksne", pris:180 ,antall:0},
	{tekst:"Barn (0-2)", pris:150, antall:0},
	{tekst:"Barn (3-9)", pris:150, antall:0},
	{tekst:"Ungdom (10-16)", pris:140, antall:0},
	{tekst:"Student", pris:120, antall:0},
	{tekst:"Elev", pris:100, antall:0},
];

for(var i=0;i<billetter.length;i++){
	//Lager tabellen
	//En midlertidig variabel for hver celle-rad
	var temprad = tblBilletter.insertRow();
	
	//Legger celler inn som midlertidige variabler
	var tempKategori = temprad.insertCell(0);
	var tempPris = temprad.insertCell(1);
	var tempAntall = temprad.insertCell(2);
	var tempFjernKnapp = temprad.insertCell(3);
			
			
	//Innhold legges i hver celle
	tempKategori.innerHTML = billetter[i].tekst;
	tempKategori.classList.add("classLeggTilBillett");
	tempAntall.innerHTML = billetter[i].antall;
	tempPris.innerHTML = billetter[i].pris;
	tempFjernKnapp.innerHTML = "-";
	tempFjernKnapp.classList.add("classFjernBillett");
						
	//Funksjoner for å bestille og fjerne bestilling
	tempKategori.onclick = leggtilBillett;
	tempFjernKnapp.onclick = fjernBillett;
}
		
//Siste rad med info om billettbestilling
var sisterad=(tblBilletter.insertRow());
		
var tdUrabatt = sisterad.insertCell(0);
tdUrabatt.classList.add("classURabatt");
		
var tdPris = sisterad.insertCell(1);
var tdAntall = sisterad.insertCell(2);
var tdFjernAlleBilletter = sisterad.insertCell(3);
		
tdFjernAlleBilletter.innerHTML = "-";
tdFjernAlleBilletter.classList.add("classFjernBillett");
tdFjernAlleBilletter.onclick = fjernAlleBilletter;	

function leggtilBillett(){
	var indeks = event.target.parentNode.rowIndex;//Finner radnummer når man klikker på celle
	billetter[indeks].antall++; //Øker antall billetter
	tblBilletter.rows[indeks].cells[2].innerHTML = billetter[indeks].antall; //Oppdaterer antall
	summer();//Beregner ny pris	
}

function fjernBillett(){
	var indeks = event.target.parentNode.rowIndex;
	
	if(billetter[indeks].antall>0){
		billetter[indeks].antall--;//Reduserer antall billetter
		tblBilletter.rows[indeks].cells[2].innerHTML = billetter[indeks].antall;
		summer();	//Beregner ny pris	
	}
}

function fjernAlleBilletter(){
	//Fjerner alle bestilte billetter i arrayet og tabellen
	for(var i=0;i<billetter.length;i++){
		billetter[i].antall=0;
		tblBilletter.rows[i].cells[2].innerHTML = "0";
	}
	summer()//Beregner ny pris
}

function summer(){
	var totalPrisUrabatt = 0;	
	var rabatt = 15; //15 kr i rabatt pr. billett
	var totalAntall = 0;
	//Henter verdier fra arrayet
	var voksne = billetter[0].antall;
	//Mange kategorier teller som barn
	var barn = billetter[1].antall + billetter[2].antall + billetter[3].antall;
						
	//Resetter rabattfeltet
	tdUrabatt.innerHTML = "";
			
	//Legger sammen alle billetter
	for (var i=0;i<billetter.length;i++){
		totalPrisUrabatt+=billetter[i].antall*billetter[i].pris;
		totalAntall += billetter[i].antall;
	}
	tdAntall.innerHTML = totalAntall;
			
	//Beregner eventuell rabatt
	if(voksne>0&&barn>0){
		var totalRabatt = rabatt*(voksne+barn);//Total rabatt på billettene som gir rabatt
		tdUrabatt.innerHTML = totalPrisUrabatt;
		tdPris.innerHTML = totalPrisUrabatt-totalRabatt;
	}	else {
		tdPris.innerHTML = totalPrisUrabatt;		
	}
}