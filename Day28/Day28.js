var x;
function positive(x) {
  if (x >= 0) document.write("the number is positive");
  else throw "x must not be negative";
}
positive(5);
