/* 
Team legend-ter-ie-eu-reka
Queenie Xiang, Eugene Thomas, Terry Guan 
Softdev pd7
HW17: Moo? 
2017-12-13
*/

var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;


//Randomized target location 
var targetX = Math.floor(Math.random() * boxWidth) + 1;
var targetY = Math.floor(Math.random()* boxHeight) + 1; 

/* 
//Hard code target as center 
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;
*/

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );
console.log( "Target location X: " + targetX);
console.log( "Target location Y: " + targetY);

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    var xcor = Math.pow( (x0 - x1), 2);
    var ycor = Math.pow( (y0 - y1), 2);
    return Math.sqrt(xcor + ycor);
};

var findIt = function(e) {
    var currentX = e.clientX;
    var currentY = e.clientY;
    //console.log("mouse x: " + currentX + " mouse y: " + currentY);

    //Distance 
    var dist = distance(currentX, currentY, targetX, targetY);
    console.log("distance: " + dist);

    //Colors
    dist_rgb = Math.floor(255-dist);
    //Setting the rgb colors using current distance; 
    document.body.style.background = "rgb(100, 30" +  "," + dist_rgb + ")";
  
    if (dist < 10) {
	document.body.style.background = "gold";
	console.log("Target found!");
	alert("Congratulations! You found the target! YAYYYYY!");
    }
};

box.addEventListener("mousemove", findIt);
