//1
var person = {
 firstName: "Mohammed",
 lastName: "Alali",
 age: 30,
  fullName : function() {
  return this.firstName + " " + this.lastName;
  }
};
document.write(person.fullName() + "<br>");
//2
var test = {
 prop: 42,
 func: function() {
 return this.prop;
 },
};
document.write(test.func() + "<br>");
//3
var x = this;
document.write(x + "<br>");
//4
document.write(this === window);
a = 37;
document.write("<br>"+window.a); 
this.b = "it is mine";
document.write("<br>"+window.b);
document.write("<br>"+b); 
document.write("<br>")
//5
function myFunction() {
 return this;
}
document.write(myFunction())