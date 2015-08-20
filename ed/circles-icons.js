function loadSVG(ficon, micon) {
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
      .range([10, 300])
      .domain([1, 10]);

    var circle = svg.selectAll("gicon")
    .data(circlesList, function(d) {
        return d;
    });

    for(var y=0; y < yPos.length; y++) {
        circle.enter()
        .append("text")
            .attr('font-family', 'FontAwesome')
            .attr('font-size', '2em')
            .attr("x", function(d) { return scale(d); })
            .attr("y", yPos[y])
            .text(function(d) { return micon; })
                .style("fill", "#bcbcbc")
    }

    svg.selectAll("text")
        .filter(function(d, i) {
            return i>87;
        })
        .text(function(d) { return ficon; })
            .style("fill", "steelblue");

    svg.append("text")
        .attr("x", 360)
        .attr("y", 190)
        .text("Only 12% of MPs are women")
            .style("fill", "steelblue")

}

// venus, mars
//setTimeout(loadSVG, 130, '\uf221', '\uf222');
// female, male
setTimeout(loadSVG, 130, '\uf182', '\uf183');


