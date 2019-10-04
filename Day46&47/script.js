var studentName =["Reema", "Sara", "Hend", "Amal", "Hana"];
var GPA = [5.0, 4.90, 4.50, 4.98, 3.50];

for (var i=0; i<studentName.length; i++) {
  document.write("<tr><td>" + studentName[i] + "</td>");
  document.write("<td>" + GPA[i] + "</td></tr>");
}