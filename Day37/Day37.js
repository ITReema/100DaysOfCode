var person = {
  firstName: "Mohammed",
  lastName: "Alali",
  age: 30,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
document.write("firstName" in person);
document.write("<br>");
document.write(person.hasOwnProperty("lastName"));
document.write("<br>");
document.write(person.propertyIsEnumerable("age"))
