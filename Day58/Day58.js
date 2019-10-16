// map
var numbers = [4, 9, 16];
var x = numbers.map(Math.sqrt);
document.write(x +"<br>");
// filter
a = [1,2,3,4,5];
smallvalues = a.filter(function(x) { return x < 3 });
everyother = a.filter(function(x,i) { return i%2==0 });
document.write(smallvalues +"<br>");
document.write(everyother + "<br>");
// every & some
a = [1,2,3,4,5];
y= a.every(function(x) { return x < 10; })
z= a.every(function(x) { return x % 2 === 0; })
document.write(y +"<br>");
document.write(z +"<br>");
// reduce & reduceRight
var numbers = [175, 50, 25];
var leftToRight = numbers.reduce(function(total, num) {return total - num;});
var RighToLeft = numbers.reduceRight(function(total, num) {return total - num;});
document.write(leftToRight +"<br>");
document.write(RighToLeft +"<br>");
// indexOf & lastIndexOf
var fruits = [1,2,3,4];
var a = fruits.indexOf(1);
var b = fruits.lastIndexOf(2);
document.write(a +"<br>");
document.write(b +"<br>");