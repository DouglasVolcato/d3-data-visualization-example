var dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
var w = 500;
var h = 120;
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => {
    return h - 3 * d;
  })
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d);
svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d - 3);
