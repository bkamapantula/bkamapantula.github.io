var svgOne = d3.select(".circlesOnes")
            .append("svg")
            .attr("width", "720px")
            .attr("height", "40px")

var svgTwo = d3.select(".circlesTwos")
            .append("svg")
            .attr("width", "720px")
            .attr("height", "40px");

var svgThree = d3.select(".circlesThrees")
            .append("svg")
            .attr("width", "720px")
            .attr("height", "40px");

var svgFour = d3.select(".circlesFours")
            .append("svg")
            .attr("width", "720px")
            .attr("height", "40px");

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
                .attr("cy", 20)
                .attr("r", 6)
                .style("fill", "#bcbcbc");

svgTwo.selectAll("circle").data(circlesList).enter().append("circle").attr("cx", function(d, i) { return i*25 + 20; })
                .attr("cy", 20)
                .attr("r", 6)
                .style("fill", "#bcbcbc");

svgThree.selectAll("circle").data(circlesList).enter().append("circle").attr("cx", function(d, i) { return i*25 + 20; })
                .attr("cy", 20)
                .attr("r", 6)
                .style("fill", "#bcbcbc");

var circlesFour = svgFour.selectAll("circle").data(circlesList).enter().append("circle").attr("cx", function(d, i) { return i*25 + 20; })
                .attr("cy", 20)
                .attr("r", 6)
                .style("fill", "#bcbcbc");

circlesFour.filter(function(d, i) {
            return d > 16;
    })
    .style("fill", "#fdae6b")
    .attr("r", 10);
    //.on("mouseover", function(d) { return console.log("12% women MPs only"); });



