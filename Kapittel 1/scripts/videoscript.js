var vid = document.getElementById("vid");
var parTekst = document.getElementById("parTekst");
var btnminus5 = document.getElementById("btnminus5");
var btnplus5 = document.getElementById("btnplus5");
var btnStartNytt = document.getElementById("btnStartNytt");
var parTekst2 = document.getElementById("parTekst2");
var btnSpecial = document.getElementById("btnSpecial");

var loop = false;

vid.onclick = function(){
    if (vid.paused) {
        vid.play();
        }
    else {
        vid.pause();
    } 
}

btnminus5.onclick = function(){
    vid.currentTime -= 5;
}

btnplus5.onclick = function(){
    vid.currentTime += 5;
}

btnStartNytt.onclick = function(){
    vid.currentTime = 0;
    vid.play();
}

btnSpecial.onclick = function() {
    if(loop == false) {
        vid.currentTime = 18;
        vid.play();
        loop = true;
    }
}

vid.ontimeupdate = function() { 
    while(loop == 1) {
        if(vid.currentTime > 23) {
            vid.currentTime = 18;
        }
    }
}

vid.ontimeupdate = function() {
    var videolength = vid.currentTime;

    parTekst.innerHTML = "Videotid: " + (Math.round(videolength * 10) / 10) + " sek";

    if (vid.currentTime>10 && vid.currentTime<15) {
        vid.setAttribute("height", "600");
    } else {
        vid.setAttribute("height", "500");
    }
}