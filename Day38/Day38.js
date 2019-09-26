var person = {
  firstName: "Mohammed",
  lastName: "Alali",
  language: "EN",
  get langGet() { 
    return this.language; },
  set langSet(value) { 
    this.language = value; }
};

person.langSet = "AR";
document.getElementById("demo").innerHTML = person.langGet;
