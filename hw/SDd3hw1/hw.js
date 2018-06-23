//Terry Guan
//SoftDev2 pd7
//K#12: d3 hw 1
//2018-03-20

//Japan: 4 Gold, 5 Silver, 4 Bronze
//America: 9 Gold, 8 Silver, 6 Bronze

var pic = document.getElementById("vimage");

var gold = document.createElementNS("http://www.w3.org/2000/svg", "circle");
gold.setAttribute("cx",  200);
gold.setAttribute("cy",  250);
gold.setAttribute("fill", "gold" );

pic.appendChild(gold); 

var silver = document.createElementNS("http://www.w3.org/2000/svg", "circle");
silver.setAttribute("cx",  400);
silver.setAttribute("cy",  250);
silver.setAttribute("fill", "silver" );

pic.appendChild(silver);

var bronze = document.createElementNS("http://www.w3.org/2000/svg", "circle");
bronze.setAttribute("cx",  600);
bronze.setAttribute("cy",  250);
bronze.setAttribute("fill", "bronze" );

pic.appendChild(bronze); 

japan = [4, 5, 4]
us = [9, 8, 6]

var createCircles = function(l) {
    d3.selectAll("circle").data(l).attr("r", function(d) {
	return d * 10;    
    });
}

document.getElementById("japan").addEventListener("click", function(e) {
    e.preventDefault();
    createCircles(japan); 
});

document.getElementById("us").addEventListener("click", function(e) {
    e.preventDefault();
    createCircles(us); 
});

