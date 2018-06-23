// Terry Guan
// SoftDev2 Pd7
// K#02: animate expanding/shrinking circle
// 2018-02-07

var c = document.getElementById("slate"); //gets canvas tag
var ctx = c.getContext("2d"); //gets context of canvas
var gr = 10;
var grow = true; //true is expand, false is shrink
var ID = 0; //true then continue, false then stop
var state = true;
var logo = new Image();
logo.src = 'logo.png';

var draw_circle = function() {
  cancelAnimationFrame(ID);
  ctx.strokeStyle = '#9A98C0';
  ctx.fillStyle = '#9A98C0';
  clean_canvas(ctx);
  ctx.arc(300, 300, gr, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  if (gr >= 30 || gr == 0) {
    grow = !grow;
  }
  if (state) { //if the state is true, then it shall continue animating
    if (grow)
    gr++;
    else
    gr--;
    ID = requestAnimationFrame(draw_circle);
  }
}

var vec_d = [(Math.random() + 1.3) * 3, (Math.random() + 1) * 4];
var vec_position = [300, 300];

var dvd_screensaver = function() {
  cancelAnimationFrame(ID);
  clean_canvas(ctx);
  ctx.drawImage(logo, vec_position[0], vec_position[1], 50, 50);
  if (vec_position[0] + 50 >= 600) { //hits right wall
    vec_d[0] = -vec_d[0];
  }
  if (vec_position[0] <= 0) { //hits left wall
    vec_d[0] = -vec_d[0];
  }
  if (vec_position[1] <= 0) { //hits top wall
    vec_d[1] = -vec_d[1];
  }
  if (vec_position[1] + 50 >= 600) { //hits bottom wall
    vec_d[1] = -vec_d[1];
  }
  ctx.stroke();
  ctx.fill();

  if (state) {
    vec_position[0] += vec_d[0];
    vec_position[1] += vec_d[1];
    ID = requestAnimationFrame(dvd_screensaver);
  }

}

var clean_canvas = function(obj) {
  obj.closePath();
  obj.beginPath();
  obj.clearRect(0, 0, 600, 600);
}

var cancelAnimation = function(currentID) {
  cancelAnimationFrame(ID);
  state = false;
}

document.getElementById("animate").addEventListener("click", function(e) {
  e.preventDefault();
  state = true;
  ID = requestAnimationFrame(draw_circle);
} //end of function(e) definition
); //end of addEventListener

document.getElementById("DVD").addEventListener("click", function(e) {
  e.preventDefault();
  state = true;
  ID = requestAnimationFrame(dvd_screensaver);
} //end of function(e) definition
); //end of addEventListener

document.getElementById("stop").addEventListener("click", function(e) {
  e.preventDefault();
  cancelAnimation(ID);
  // console.log(ID + " has been cancelled");
} //end of function(e) definition
); //end of addEventListener
