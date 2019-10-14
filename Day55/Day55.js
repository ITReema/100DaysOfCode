var group1 = [1, 2, 3];
var group2 = [4,5];
document.write("array 1: " + group1 + "<br>");
document.write("array 2: " + group2 + "<br>");

// join
document.write("Join: " + group1.join() + "<br>");
// reverse
 document.write("Reverse: " + group1.reverse() + "<br>");
// sort
document.write("Sort: " + group1.sort() + "<br>");
//concat
document.write("Concat: " + group1.concat(group2) + "<br>");
// slice
document.write("Slice (0,2): " + group1.slice(0,2) + "<br>");
document.write("Slice (2): " + group1.slice(2) + "<br>");
document.write("Slice (-2): " +group1.slice(-2) + "<br>");
