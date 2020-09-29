
var getFirstName= function(employees){
var  firstname= employees.firstName
var lastname=employees.lastName
return firstname+" "+ lastname
}
var  firstnames=employees.map(getFirstName)

var getLastName= function(employees){
return employees.lastName
}
var  lastnames=employees.map(getLastName)

d3.select("body")
  .selectAll("h2")
  .data(employees)
  .enter()
  .append("h2")
  .text(getFirstName)
