const can = document.getElementById("can");
let ctx = can.getContext("2d");

const canWidth = parseInt(can.getAttribute("width"));
const canHeight = parseInt(can.getAttribute("height"));
const numBox = 8;
const boxWidth = canWidth / numBox;

for(let x = 0; x < canWidth; x += boxWidth) {
    for(let y = (x/boxWidth)%2 * boxWidth ; y < canHeight; y += 2*boxWidth) {
        ctx.rect(x, y, boxWidth, boxWidth);
        ctx.fill();
    }
}