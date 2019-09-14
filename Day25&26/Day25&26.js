var x = 0;
var y = 0;
while (x < 5) {
  x++;
  if (x == 3) {
    continue;
  }
  y += x;
  document.write("y="+y+" x="+x+"<br>");
}

document.write("<br>")

var i = 0;
var j = 10;
checkiandj:
while (i < 4) {
  document.write(i);
  i += 1;
  checkj:
  while (j > 4) {
    document.write(j);
    j -= 1;
    if ((j % 2) == 0) {
      continue checkj;
    }
    document.write(j + " is odd.");
  }
  document.write("i = " + i );
  document.write("j = " + j );
 }
 