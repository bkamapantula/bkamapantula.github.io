function loadSVG() {
var svg = d3.select(".circlesOne")
            .append("svg")
            .attr("width", "720px")
            .attr("height", "400px")

var circlesList = [];
for(var circleId=1; circleId<=10; circleId++) {
    circlesList.push(circleId);
}

var maxYPos = 380;
var yPosStep = 35;
var yPos = [];

for(var iter = yPosStep; iter <= maxYPos; iter += yPosStep) {
    yPos.push(iter);
}

var scale = d3.scale.linear()
  .range([10, 490])
  .domain([1, 10]);

var circle = svg.selectAll("circle")
.data(circlesList, function(d) {
    return d;
});

for(var y=0; y < yPos.length; y++) {
    circle.enter().append("circle")
        .attr("cx", function(d) { return scale(d); })
        .attr("cy", yPos[y])
        .attr("r", 8)
    .style("fill", "#bcbcbc")
    .on("mouseover", function(d, i) {
        console.log(d, i);
    });
}

svg.append("text")
    .attr("x", 360)
    .attr("y", 390)
    .text("Only 12% of MPs are women")

svg.selectAll("circle")
    .filter(function(d, i) {
        return i > 87;
    })
    .transition().delay((function(d, i) { return i*20; }))
    .style("fill", "steelblue");
}

setTimeout(loadSVG, 130);

