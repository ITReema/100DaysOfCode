var teacher = {
  subject: "Network",
  coordinatorName: "Amal",
  nOofHours: "60",
  noofStudents: "25",
  
  get getSubject() { 
    return this.subject; },
  set setSubject(value) { 
    this.subject = value; }
};

teacher.setSubject = "computer";
document.getElementById("demo").innerHTML = teacher.getSubject;
