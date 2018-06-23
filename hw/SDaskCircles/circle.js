var space = document.getElementById("space");

var clearit = document.getElementById("clear");
var img = document.getElementById("space");

space.addEventListener("click", function(e) {
  e.preventDefault();
  dotMe(e.offsetX, e.offsetY);
})
;

//spawns a cirlce in the svg window
var dotMe = function(x, y) {
    ns = initiateCircle();
    ns.setAttribute("cx", x);
    ns.setAttribute("cy", y);
    // addEventListener that turns fill to blue
    ns.addEventListener("click", colorin, true);
    ns.addEventListener("click", stoppropagation);
    /*ns.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation(); // stop the event flow from propagating to the bubble phase which spawns a circle
      ns.setAttribute("fill", "blue");
      ns.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        ns.setAttribute("cx", Math.random() * 500);
        ns.setAttribute("cy", Math.random() * 500);
      }, true);
    }, true); */
    space.appendChild(ns);
    return;
}

var stoppropagation = function(e){
  e.stopPropagation();
}

var colorin = function(e){
  if (this.getAttribute("fill") == "#9A98C0"){
    this.setAttribute("fill", "blue");
  }
    this.preventDefault();
    thisi.stopPropagation();
    this.setAttribute("cx", Math.random() * 500);
    this.setAttribute("cy", Math.random() * 500);
}


var initiateCircle = function() {
  var ns = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  ns.setAttribute("stroke", "#9A98C0");
  ns.setAttribute("fill", "#9A98C0");
  ns.setAttribute("r", "20");
  return ns;
}


var clear_it = function(){
  while (img.firstChild) {
    img.removeChild(img.firstChild);
}
start = true;
}

clearit.addEventListener("click", clear_it);