function teacher(subject, coordinatorName, nOofHours, noofStudents){
  this.subject = subject;
  this.coordinatorName = coordinatorName;
  this.nOofHours = nOofHours;
  this.noofStudents = noofStudents;
}
var sara = new teacher("Network", "Amal", 60, 25);
document.write("subject: " + sara.subject + "<br> coordinator Name: " + sara.coordinatorName);