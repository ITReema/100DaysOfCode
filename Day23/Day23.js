var i=0;
HowToLabel: while ( i < 3) {
  document.write("i= "+i+"<br>");
  i++;
}

document.write("<br>")

for(var i = 0; i < 1000; i++) {
  document.write("Hello<br>");
  if (i==2) 
    break;
}

document.write("<br>")

var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  document.write("Outer loops(x): " + x + " ");
  x += 1;
  z = 1;
  while (true) {
    document.write("Inner loops(z): " + z+ "<br>");
    z += 1;
    if (z === 3 && x === 3) {
      break labelCancelLoops;
    } else if (z === 3) {
      break;
    }
  }
}