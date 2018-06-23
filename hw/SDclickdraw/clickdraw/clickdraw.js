
var draw_square = function(obj, x, y) {
    obj.lineTo(x,y); //connects new (x,y) to old (x,y)
    obj.stroke();
    obj.beginPath(); //must use this before drawing anything on a NEW canvas
    obj.strokeStyle = '#EDCBCC'; 
    obj.fillStyle = "#EDCBCC";
    obj.rect(x - 10, y - 10, 20, 20); 
    obj.fill(); 
    obj.moveTo(x,y); //fill moves the path pos so you have to reset
    obj.closePath();
}

var draw_circle = function(obj, x, y) {
    obj.strokeStyle = '#9A98C0';
    obj.fillStyle = '#9A98C0';
    obj.lineTo(x,y); //connects the current dot 
    obj.stroke(); 
    obj.beginPath();
    obj.moveTo(x,y);    
    obj.arc(x, y, 10, 0, 2 * Math.PI);
    obj.stroke();
    obj.fill();
    obj.moveTo(x,y); 
}

var clean_canvas = function(obj) {
    obj.closePath();
    obj.beginPath();
    obj.clearRect(0, 0, 600, 600);
}
