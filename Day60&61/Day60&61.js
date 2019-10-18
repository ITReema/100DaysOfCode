var first = [1, 2, 3, 5, 8, 13];
var second = [1, 2, 3, 4, 8, 13];

document.write("first array: "+first +"<br>");
document.write("second array: "+second +"<br>");

function myFunction(item, index) {
  if (first[index] != second[index]){
    document.write("index: "+index + " value: " + item + "<br>");
  }
}
second.forEach(myFunction);