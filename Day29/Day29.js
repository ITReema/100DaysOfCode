var x;
function positive(x) {
  if (x >= 0) return x;
  else throw "x must not be negative";
}
try {
  var n = Number(prompt("Please enter a positive integer", ""));
  positive(n);
  alert(n + " is positive");
} catch (y) {
  alert(y);
  document.write(y);
}
finally{
  alert("Finally, I got it");
}