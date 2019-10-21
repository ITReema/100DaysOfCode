//example 1
function myFunction(a, b) {
 return a * b;
}
document.write(myFunction(3,5) +"<br>");

//example 2
(function s() {
 document.write("Hello! I called myself <br>");
})();

//example 3
var myFunction = function (a, b) {return a * b}
document.write(myFunction(1,5) +"<br>");

//example4
var myFunction = new Function("a", "b", "return a * b");
document.write(myFunction(5,5))