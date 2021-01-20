window.document.addEventListener('DOMContentLoaded', () => {

  //arc test
  var pi = Math.PI;
  //fundal
  var width = 930;
  var height = 600;


  var night = d3.select("#night")
    .append("svg")
    // .attr("width", width)
    // .attr("height", height)
    .attr("viewBox", [0, 0, width, height]);
  night.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "rgb(229,221,210)");

//graph title
  night.append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", "30")

    .append("tspan")
    .attr('x', width / 2)
    .attr('dy', 5)
    .style("font-size", "large")
    .text("DIAGRAM ")

    .append("tspan")
    .style("font-size", "small")
    .text("OF THE")

    .append("tspan")
    .style("font-size", "large")
    .text(" CAUSES ")

    .append("tspan")
    .style("font-size", "small")
    .text(" OF ")

    .append("tspan")
    .style("font-size", "large")
    .text(" MORTALITY")

    .append("tspan")
    .attr('x', width / 2)
    .attr('dy', 20)
    .style("font-size", "small")
    .text("IN THE")

    .append("tspan")
    .style("font-size", "large")
    .text(" ARMY ")

    .append("tspan")
    .style("font-size", "small")
    .text("IN THE")

    .append("tspan")
    .style("font-size", "large")
    .text(" EAST");

    //italic explenations
    var nxtLine = 15;
    var indentLine = 40;
    var noIndLine = 20;

    night.append("text")
    .attr("text-anchor", "start")
    .attr("x", "0")
    .attr("y", "410")
    .style("font-style", "italic")
    .style("font-size","small")

    .append("tspan")
    .attr("x", noIndLine)
    .attr("dy", "0")
    .text("The Areas of the blue, red, & black wedges are each measured from")

    .append("tspan")
    .attr("x", indentLine)
    .attr("dy", nxtLine)
    .text("the centre as the common vertex.")

    .append("tspan")
    .attr("x", noIndLine)
    .attr("dy", nxtLine)
    .text("The blue wedges measured from the centre of the circle represent area for")

    .append("tspan")
    .attr("x", indentLine)
    .attr("dy", nxtLine)
    .text("for area the deaths from Preventible or Mitigable Zymotic Diseases, the ")

    .append("tspan")
    .attr("x", indentLine)
    .attr("dy", nxtLine)
    .text("red wedges measured from the center the deaths from wounds, & the ")

    .append("tspan")
    .attr("x", indentLine)
    .attr("dy", nxtLine)
    .text("black wedges measured from the center the deaths from all other causes")

    .append("tspan")
    .attr("x", noIndLine)
    .attr("dy", nxtLine)
    .text("The black line across the red triangle in Nov' 1854 marks the boundary")

    .append("tspan")
    .attr("x", indentLine)
    .attr("dy", nxtLine)
    .text("of the deaths from all other causes during the month.")

    .append("tspan")
    .attr("x", noIndLine)
    .attr("dy", nxtLine)
    .text("In October 1844, & April 1855, the black area coincides with the red,")

    .append("tspan")
    .attr("x", indentLine)
    .attr("dy", nxtLine)
    .text("in January & February 1856, the blue coincides with the black ")

    .append("tspan")
    .attr("x", noIndLine)
    .attr("dy", nxtLine)
    .text("The entire areas may be compared by following the blue, the red & the")

    .append("tspan")
    .attr("x", indentLine)
    .attr("dy", nxtLine)
    .text("black lines enclosing them."); 

    //headers for graphs
    var cg2 = 200;
    night.append("text")
    .attr("text-anchor", "middle")
    .attr("x", cg2) //same as center of graph
    .attr("y", "60")

    .append("tspan")
    .style("font-size", "small")
    .attr("x",cg2)
    .text("1.")

    .append("tspan")
    .attr("x",cg2)
    .attr("dy","15")
    .style("font-size", "small")
    .text("APRIL 1855 ")

    .append("tspan")
    .style("font-size", "x-small")
    .text("TO")

    .append("tspan")
    .style("font-size", "small")
    .text(" MARCH 1856");

    var cg1 = 700;
    night.append("text")
    .attr("text-anchor", "middle")
    .attr("x", cg1) //same as center of graph
    .attr("y", "60")

    .attr("x",cg1)
    .text("2.")

    .append("tspan")
    .attr("x",cg1)
    .attr("dy","15")
    .style("font-size", "small")
    .text("APRIL 1854 ")

    .append("tspan")
    .style("font-size", "x-small")
    .text("TO")

    .append("tspan")
    .style("font-size", "small")
    .text(" MARCH 1855");

    //underlines for texts
  night.append("line")
    .style("stroke", "black")
    .attr("x1", width/2 - 90)
    .attr("y1", 67)
    .attr("x2", width/2 + 90)
    .attr("y2", 67);
  night.append("line")
    .style("stroke", "black")
    .attr("x1", width/2 - 100)
    .attr("y1", 70)
    .attr("x2", width/2 + 100)
    .attr("y2", 70);

  night.append("line")
  .style("stroke", "black")
  .attr("x1", cg1 - 60)
  .attr("y1", 80)
  .attr("x2", cg1 + 50)
  .attr("y2", 80);

  night.append("line")
  .style("stroke", "black")
  .attr("x1", cg2 - 60)
  .attr("y1", 80)
  .attr("x2", cg2 + 50)
  .attr("y2", 80);

  //dotted line
  night.append("polyline")      // attach a polyline
    .attr("class", "dashLine")
    // .style("stroke", "rgb(27, 15, 15)")  // colour the line
    // .style("fill", "none")     // remove any fill colour
    // .style("stroke-dasharray", "5,5") //dashed line
    // .style("stroke-width", "0.5")
    .attr("points", "70,251, 320,370, 486,250");
    


    
var bRunAnim = 1;
var animEnd = 1;

function changeEnd(){
  animEnd=1;
}

  function drawSlice(prop, className, num, graph) {

    var fArc = d3.arc()
      .innerRadius(0)
      .outerRadius(1)
      // .outerRadius(prop)
      .startAngle((270 + (num * 30)) * (Math.PI / 180)) //converting from degs to radians
      .endAngle((300 + (num * 30)) * (Math.PI / 180));

    var path = night
      .append("path")
      .attr("class", className + " graph" + graph)
      .attr("d", fArc);

    fArc.outerRadius(prop)

    // if (bRunAnim == 1) {
    if(animEnd){
      animEnd=0;
      path.transition().delay(1500).duration(1500).attr("d", fArc).on("end",changeEnd);
      animEnd=1;
    }
  // } else {
  //     path.attr("d", fArc);
  // }
  }


  function drawArcsSimple(objSlice, graphNumber) {

    //colors disease: blue
    //       wounds: pink
    //       other: blank

    var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

    objSlice.forEach(function (o) {

      var monthNum = o.date.split("/");
      var num = monthNum[0] - 4;

      if (graphNumber == 1) {
        //for second graph only  !!!!!!!!!!!!
        var wToDraw = "";
        wToDraw = "disease";
        drawSlice(o.disease, wToDraw, num, graphNumber);
        wToDraw = "other";
        drawSlice(o.other, wToDraw, num, graphNumber);
        wToDraw = "wounds";
        drawSlice(o.wounds, wToDraw, num, graphNumber);

        //for second graph only  !!!!!!!!!!!!
        if (o.wounds >= o.other) {
          var fArcOutline = d3.arc()
            .innerRadius(o.other)
            .outerRadius(o.other)
            .startAngle((270 + (num * 30)) * (pi / 180)) //converting from degs to radians
            .endAngle((300 + (num * 30)) * (pi / 180));

          night
            .append("path")
            .attr("class", "outline graph" + graphNumber)
            .attr("d", fArcOutline);
        }
      } else {

        //for first graph sort values !!!!!!!!!
        var copyData = {};
        copyData.disease = o.disease;
        copyData.wounds = o.wounds;
        copyData.other = o.other;
        Object.entries(copyData).sort((a, b) => b[1] - a[1]).map(function (el) {
          drawSlice(el[1], el[0], num, graphNumber);
        }
        );

      }


      var textRad = Math.max(o.disease, o.wounds, o.other);
      if (textRad < 22) textRad = 22;

      var fArcText = d3.arc()
        .innerRadius(textRad)
        .outerRadius(textRad)
        .startAngle((270 + (num * 30)) * (pi / 180)) //converting from degs to radians
        .endAngle((300 + (num * 30)) * (pi / 180));

      night
        .append("path")
        .attr("class", "forText"+graphNumber)
        .attr("id", "wavy" + graphNumber + num)
        .attr("d", fArcText);

      //Create an SVG text element and append a textPath element
      night.append("text")
        .attr("dy", -10)
        .append("textPath") //append a textPath to the text element
        .attr("xlink:href", "#wavy" + graphNumber + num) //place the ID of the path here
        .attr("startOffset", "7%")
        .text(months[monthNum[0] - 1]);

    });

  }


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);

      myObj.forEach(function (o) {
        var n = 1000 * 12 / o.army_size;
        o.disease = o.disease * n;
        o.wounds = o.wounds * n;
        o.other = o.other * n;

      });

      //calculate radii for display
      myObj.forEach(function (o) {
        o.disease = Math.sqrt((o.disease * 12) / Math.PI);
        o.wounds = Math.sqrt((o.wounds * 12) / Math.PI);
        o.other = Math.sqrt((o.other * 12) / Math.PI);
      });


      //split array of objects into 2, 1 for each graph
      var firstGraphArr = myObj.slice(0, 12);
      var secondGraphArr = myObj.slice(12, 24);

      drawArcsSimple(firstGraphArr, 1); //first graph a bit different then the second
      drawArcsSimple(secondGraphArr, 2);

      //night.append("h2")
      //.html("Diagram <small>of the</small> Causes");

      // let screensize = screen.width;
      // console.log('screen');
      // console.log(screensize);
      // let svgsize = document.getElementById('night').getBoundingClientRect().width;
      // console.log('svg');
      // console.log(svgsize);
      // let calc = svgsize / screensize;
      // night.attr("transform", "scale(" + 0.9 + ")");

    }
  };
  xmlhttp.open("GET", "dataset.json", true);
  xmlhttp.send();

  // console.log(document.getElementById('night').parentNode.getBoundingClientRect());
  // console.log(screen.width);

})