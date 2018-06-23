var space = document.getElementById("space");

space.addEventListener("click", function(e) {
  e.preventDefault();
  dotMe(e.offsetX, e.offsetY);
});

var prevX, prevY;
var firstClick = true;

var dotMe = function(x, y) {
    var ns = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    ns.setAttribute("stroke", "#9A98C0");
    ns.setAttribute("fill", "#9A98C0");
    ns.setAttribute("cx", x);
    ns.setAttribute("cy", y);
    ns.setAttribute("r", "20");
    space.appendChild(ns);
    drawLine(x, y);

    return;
}

var drawLine = function(x, y) {
  if (firstClick) {
    prevX = x;
    prevY = y;
    firstClick = !firstClick;
  }
  var ns = document.createElementNS("http://www.w3.org/2000/svg", "line");
  ns.setAttribute("stroke", "#9A98C0");
  ns.setAttribute("x1", prevX);
  ns.setAttribute("y1", prevY);
  ns.setAttribute("x2", x);
  ns.setAttribute("y2", y);
  prevX = x;
  prevY = y;
  space.appendChild(ns);
  return;
}
