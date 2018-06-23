var src = 'http://www.w3.org/2000/svg';

var svg = {
  element: document.createElementNS(src, "svg"),
  height: 500,
  width: 500,
  id: "scatter",
  style: "border: 1px solid;"
}

svg.element.setAttribute("height", svg.height);
svg.element.setAttribute("width", svg.width);
// svg.element.setAttribute("style", svg.style);
document.getElementById("wrapper").appendChild(svg.element);
// done creating svg

// data object
var data = {
  title: "Relating one test result to another test result",
  xLabel: "x-Axis: test result 1",
  yLabel: "y-Axis: test result 2",
  description: "a random dataset correlating one test result to another",
  src: "https://www.coursera.org/learn/machine-learning/programming/8f3qT/linear-regression",
  xData: [6.1101, 5.5277, 8.5186, 7.0032, 5.8598],
  yData: [17.592, 9.1302, 13.662, 11.854, 6.8233]
}

// function to add text with black fill at x,y
var addText = function(text, x, y) {
  var a = document.createElementNS(src, "text");
  a.setAttribute("x", x);
  a.setAttribute("y", y);
  a.setAttribute("fill", "black");
  a.textContent= text;
  svg.element.appendChild(a);
  return a;
}

// scales data by first normalizing and then multiplying data by scale of graph
var scaleData = function() {
  console.log(data.xData);
  var xMax = data.xData.reduce(function(a, b) { return Math.max(a,b); });
  var yMax = data.yData.reduce(function(a, b) { return Math.max(a,b); });
  var norm = Math.sqrt( Math.pow(xMax, 2) + Math.pow(yMax, 2) ); //dist formula
  norm = norm/(svg.height - 100);
  for (var i = 0; i < data.xData.length; i++) {
    data.xData[i] = data.xData[i]/norm;
    data.yData[i] = data.yData[i]/norm;
  }
  console.log(data.xData);
  console.log(data.yData);
  return norm;
}

//plots data on graph. Please note that the default origin is at top left corner
var graphData = function() {
  scaleData();
  var c;
  for (var i = 0; i < data.xData.length; i++) {
    c = document.createElementNS(src, "circle");
    c.setAttribute("r", 10);
    c.setAttribute("cx", data.xData[i]);
    c.setAttribute("cy", data.yData[i]);
    svg.element.appendChild(c);
    console.log(data.xData[i]);
  }
}

// graphData();

var graph = function() {
  graphData();
  addText(data.title, svg.width/2 - 100, svg.height - 50);
  addText(data.description, svg.width/2 - 100, svg.height - 25);
  addText(data.xLabel, svg.width - 200, 10);
  addText(data.yLabel, 10, svg.height - 10);
  // addText(data.description,)
}

graph();
