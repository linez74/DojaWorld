function background() {
  if (Glitter.checked == true) {
    document.body.classList.add("cowpic");
  } else {
    document.body.classList.remove("cowpic");
  }
}

var ind = 0;
carole();
function carole() {
  var l;
  var p = document.getElementsByClassName("pics");
  for (i = 0; i < p.length; i++) {
    p[i].style.display = "none";
  }
  ind++;
  if (ind > p.length) { ind = 1 }
  p[ind - 1].style.display = "block";
  setTimeout(carole, 3000);
}

function PL(n) {
  var aud = document.getElementById(n);
  return aud.paused ? aud.play() : aud.pause();
}

function rd(URL) {
  setTimeout(function () { window.location = URL }, 1830);
}


var i=1;
show(i);

function plus(x){
  show(i += x);
}

function crsl(j){
  show(i = j)
}

function show(x){
  var d;
  var sl = document.getElementsByClassName("pp");
  var gal = document.getElementsByClassName("dd");
  var wd = document.getElementsByClassName("wrd");

  if (x > sl.length) {
    i = 1
  }

  if (x < 1) {
    i = sl.length
  }

  for (d = 0; d < sl.length; d++) {
    sl[d].style.display = "none";
    wd[d].style.display="none";
  }
  for (d = 0; d < gal.length; d++) {
    gal[d].className = gal[d].className.replace(" here", "");
  }
  sl[i-1].style.display = "block";
  gal[i-1].className += " here";
  wd[i-1].style.display="block";
}


