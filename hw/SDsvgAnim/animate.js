var s = document.getElementById("space");
var r = 10;
var dr = 2;
var stop = false;
var circle, dvd;
var intervalID;
var intervalID2;

document.getElementById("but").addEventListener("click", function(e) {
  e.preventDefault();
  var ns = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  ns.setAttribute("stroke", "#9A98C0");
  ns.setAttribute("fill", "#9A98C0");
  ns.setAttribute("cx", 250);
  ns.setAttribute("cy", 250);
  ns.setAttribute("r", r);
  circle = ns;
  space.appendChild(ns);
  intervalID = setInterval(animateCircle, 20);
});

document.getElementById("stop").addEventListener("click", function(e) {
  e.preventDefault();
  stop = true;
});

var pos = [250, 250];
document.getElementById("but2").addEventListener("click", function(e) {
  e.preventDefault();
  var ns = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  ns.setAttribute("stroke", "black");
  ns.setAttribute("fill", "#9A98C0");
  ns.setAttribute("cx", pos[0]);
  ns.setAttribute("cy", pos[1]);
  ns.setAttribute("r", r);
  dvd = ns;
  space.appendChild(ns);
  intervalID2 = setInterval(animateDvd, 20);
});

var animateCircle = function() {
  if (r >= 50 || r <= 5)
  dr = -dr;
  r += dr;
  anim.setAttribute("r", r);
  if (stop) {
    clearInterval(intervalID);
  }
}

var vec = [Math.random() * 5, Math.random() * 3];
var animateDvd = function() {
  if (pos[0] + 10 >= 500) { //hits right wall
    vec[0] = -vec[0];
  }
  if (pos[0] <= 0) { //hits left wall
    vec[0] = -vec[0];
  }
  if (pos[1] <= 0) { //hits top wall
    vec[1] = -vec[1];
  }
  if (pos[1] + 10 >= 500) { //hits bottom wall
    vec[1] = -vec[1];
  }
  pos[0] += vec[0];
  pos[1] += vec[1];
  dvd.setAttribute("cx", pos[0]);
  dvd.setAttribute("cy", pos[1]);
  if (stop) {
    clearInterval(intervalID2);
  }
}
