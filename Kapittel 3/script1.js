var btnClickMe = document.getElementById("btnClickMe");
var parTekst1 = document.getElementById("parTekst1");
var bildeMann = document.getElementById("bildeMann");
var bildeDame = document.getElementById("bildeDame");

var mann = ["1m.png", "2m.png", "3m.png", "4m.png", "5m.png"];
var dame = ["1d.png", "2d.png", "3d.png", "4d.png", "5d.png"]

btnClickMe.onclick = function(){
    tall1 = Math.random();
    tall2 = Math.random();

    console.log("Random - MANN : " + tall1);
    console.log("Random - DAME : " + tall2);

    mannTall = Math.floor(tall1 * (mann.length - 0 + 1) + 0);
    dameTall = Math.floor(tall2 * (dame.length - 0 + 1) + 0);

    bildeMann.src = mann[mannTall];
    bildeDame.src = dame[dameTall];

    console.log("Manntall = " + mannTall);
    console.log("Dametall = " + dameTall);
}