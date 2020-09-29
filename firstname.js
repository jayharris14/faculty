
var getFirstName= function(employees){
return employees.firstName
}
var  firstnames=employees.map(getFirstName)
d3.select("body")
  .selectAll("h2")
  .data(employees)
  .enter()
  .append("h2")
  .text(getFirstName)
report(firstnames)
