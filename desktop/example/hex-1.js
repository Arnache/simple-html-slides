const revealSlider = document.getElementById("reveal");
const coulBox = document.getElementById("couleur");

revealSlider.value = 0;
coulBox.checked = false;

const canvas = document.getElementById("can");
let ctx = canvas.getContext("2d");

let w,h;

let noirImg = document.getElementById("noir");
let coulImg = document.getElementById("coul");
let spImg = document.getElementById("sp");

window.onload = function() {
  w=spImg.width/4;
  h=spImg.height/4;

  canvas.width=w;
  canvas.height=h;

  compose();
}

function compose() {
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,w,h);

  let alpha = revealSlider.value/revealSlider.max;
  ctx.globalAlpha = 1-alpha;
  ctx.drawImage(spImg,0,0,w,h);
  ctx.globalAlpha = alpha;

  ctx.drawImage(coulBox.checked ? coulImg : noirImg, 0,0,w,h);
  ctx.globalAlpha = 1;
}

revealSlider.oninput = compose;
coulBox.onchange = function() {
  document.getElementById("sp1").style.display = coulBox.checked ? "none" : "";
  document.getElementById("sp2").style.display = coulBox.checked ? "" : "none" ;
  compose();
}
