/*
  guanT_wengC - Terry Guan, Charles Weng
  SoftDev2   pd7
  K #14: You Are Smarter Than the President*
  2018-3-26
*/

/*
  ==============================================================================
                                  Variables/Initiation
  ==============================================================================
*/

var src = 'http://www.w3.org/2000/svg';

// values are in trillion
// values are in the following order: total revenue, total spending, money lost, GDP
var y2015 = [2.96, 3.36, 0.339, 16.2];
var y2016 = [2.99, 3.54, 0.552, 16.5];


/*
  ==============================================================================
                                  Functions
  ==============================================================================
*/

var graph = function(x, l) {
  var chart = d3.select(x).selectAll("div").data(l).enter().append("div");
  //Set width of each bar proportional to its data value.
  chart.style("width", function(d) {
    return d * 35 + "px"; });
  //Label each bar.
  chart.text(function(d) { return d; });
}


/*
  ==============================================================================
                                  Init
  ==============================================================================
*/

graph(".chart1", y2015);
graph(".chart2", y2016);
