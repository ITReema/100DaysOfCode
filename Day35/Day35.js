function user(id, FirstName, LastName){
  this.id = id;
  this.FirstName = FirstName;
  this.LastName = LastName;
}
var Mohammed = new user(1001, "Mohammed", "Alali");
var Fahad = new user(1002, "Fahad", "Saad");
document.write(Mohammed.id + " " + Mohammed.FirstName + " "+ Mohammed.LastName);
