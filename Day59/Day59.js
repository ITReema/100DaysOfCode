var str = "Hello World";
// charAt
var a = str.charAt(0);
var b = str.charAt(str.length-3);
document.write(a + "<br>");
document.write(b +"<br>");
// includes
var n = str.includes("World");
document.write(n +"<br>");
// localeCompare
var str1 = "ab";
var str2 = "ab";
var n = str1.localeCompare(str2);
document.write(n +"<br>")
// search
var n = str.search("WORLD");
document.write(n +"<br>");
// toUpperCase
var n = str.toUpperCase();
document.write(n +"<br>");
// toLowerCase
var n = str.toLowerCase();
document.write(n +"<br>");
