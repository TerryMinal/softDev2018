var c = document.getElementById("slate"); //gets canvas tag
var ctx = c.getContext("2d"); //gets context of canvas
var gr = 10;
var grow = true; //true is expand, false is shrink
var ID = 0; //true then continue, false then stop

var draw_circle = function() {
  ctx.strokeStyle = '#9A98C0';
  ctx.fillStyle = '#9A98C0';
  ctx.closePath();
  ctx.beginPath();
  ctx.clearRect(0, 0, 600, 600);
  ctx.arc(300, 300, gr, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  if (gr >= 30 || gr == 0) {
    grow = !grow;
  }
  if (grow)
    gr++;
  else
    gr--;
  ID = requestAnimationFrame(draw_circle);
}

var clean_canvas = function(obj) {
  obj.closePath();
  obj.beginPath();
  obj.clearRect(0, 0, 600, 600);
}

document.getElementById("animate").addEventListener("click", function(e) {
  e.preventDefault();
  ID = requestAnimationFrame(draw_circle);
} //end of function(e) definition
); //end of addEventListener

document.getElementById("stop").addEventListener("click", function(e) {
  e.preventDefault();
  cancelAnimationFrame(ID);
} //end of function(e) definition
); //end of addEventListener
