//example 1
var person = {
  fullName: function() {
  return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName: "Mary",
  lastName: "Doe"
}
document.write(person.fullName.apply(person1) +"<br>")

//example 2
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
document.write(person.fullName.apply(person1, ["Oslo", "Norway"]));
