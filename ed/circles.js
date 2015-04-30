function loadSVG() {
var svgOne = d3.select(".circlesOne")
            .append("svg")
            .attr("width", "720px")
            .attr("height", "60px")

var svgTwo = d3.select(".circlesTwo")
            .append("svg")
            .attr("width", "720px")
            .attr("height", "40px");

var svgThree = d3.select(".circlesThree")
            .append("svg")
            .attr("width", "720px")
            .attr("height", "40px");

var svgFour = d3.select(".circlesFour")
            .append("svg")
            .attr("width", "720px")
            .attr("height", "80px");

var circlesList = [];
for(var circleId=1; circleId<=25; circleId++) {
    circlesList.push(circleId);
}

svgOne.selectAll("circle")
                .data(circlesList)
              .enter()
                .append("circle")
                .attr("cx", function(d, i) {
                    return i*25 + 20;
                })
                .attr("cy", 50)
                .attr("r", 6)
                .style("fill", "#bcbcbc");

svgTwo.selectAll("circle").data(circlesList).enter().append("circle").attr("cx", function(d, i) { return i*25 + 20; })
                .attr("cy", 30)
                .attr("r", 6)
                .style("fill", "#bcbcbc");

svgThree.selectAll("circle").data(circlesList).enter().append("circle").attr("cx", function(d, i) { return i*25 + 20; })
                .attr("cy", 30)
                .attr("r", 6)
                .style("fill", "#bcbcbc");

var circlesFour = svgFour.selectAll("circle").data(circlesList).enter().append("circle").attr("cx", function(d, i) { return i*25 + 20; })
                .attr("cy", 30)
                .attr("r", 6)
                .style("fill", "#bcbcbc");

circlesFour.filter(function(d, i) {
            return d > 13;
    })
    .transition().delay((function(d, i) { return i*200; }))
    .style("fill", "steelblue");
    //.attr("r", 10);
}

setTimeout(loadSVG, 13000);

