var getLastName= function(employees){
return employees.lastName
}
var  lastnames=employees.map(getLastName)
var olist= d3.select("body")
  .append("ol")

  olist.selectAll("li")
  .data(employees)
  .enter()
  .append("li")
  .text(getLastName)
