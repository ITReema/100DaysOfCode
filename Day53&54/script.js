// 1
var employees = [
  ["Ahmed", "Programmer", 6],
  ["Saad", "Engineer", 3],
  ["Omar", "Accountant", 1],
  ["Mohammed", "CEO", 5],
  ["Rami", "Programmer", 2],
  ["Salem", "Analyst", 8]
]

for(var i = 0; i < employees.length; i++) {
  document.write("<tr><td>" + employees[i][0] + "</td>");
  document.write("<td>" + employees[i][1] + "</td>");
  document.write("<td>" + employees[i][2] + "</td></tr>");
}

// 2 
for(var i = 0; i < employees.length; i++) {
  if(employees[i][2] > 3){
    console.table(employees[i][0] + "<br>");
  }
}

// 3
for(var i = 0; i < employees.length; i++) {
  if(employees[i][0] == "Saad"){
    delete employees[i];
  }
  console.table(employees[i]);
}