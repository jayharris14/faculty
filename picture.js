
d3.select("body")
  .selectAll("img")
  .data(employees)
  .enter()
  .append("img")
  .attr("src", function(employees){
  return employees.photo})
