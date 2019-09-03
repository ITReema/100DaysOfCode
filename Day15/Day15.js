var x = 5 ;
var y = 9 ;
if (x!=y)
document.write(x +" not equal " + y + "<br>")

var n = 2;
if (n == 1)
document.write("You have 1 new message. <br>");
else
document.write("You have " + n + " new messages.<br>");

var n = 2;
var b = 1;
var c = 3;
if (n == b){
  if (b == c)
    document.write("You have 1 new message.");
  else
    document.write("You have " + n + " new messages.");
}
else
  document.write("Something wrong! n not equal b");