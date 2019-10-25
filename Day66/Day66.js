function myFunction() {
  var a = 4; // local
  return a * a;
}
//-----------------------------
var a = 4; //global
function myFunction() {
  return a * a;
}
//-----------------------------
var counter = 0;
function add() {
  counter += 1;
}
add();
add();
add();
document.write(counter +"<br>");
//-----------------------------
function adds() {
 var counter = 0;
 counter += 1;
 return counter;
}
adds();
adds();
adds();
document.write(adds() +"<br>");
//-----------------------------
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();
add();
add();
add();
document.write(add());