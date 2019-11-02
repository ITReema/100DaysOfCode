// Example 1
do {
  var name = prompt("What is your name?");
  var correct = confirm("You entered '" + name + "'.\n" + "Click Okay to proceed or Cancel to reenter.");
} while(!correct)
  alert("Hello, " + name);

// Example 2 
window.onerror = function(msg, url) {
alert("ERROR: " + msg + "\n" + url);
}
docuemnet.write("Hello");