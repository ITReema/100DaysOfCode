var n = 2;
switch(n) {  
  case 1:
    document.write("You have 1 new message.");
    break;
  case 2:
    document.write("You have 2 new messages.");
    break;
  case 3:
    document.write("You have 3 new messages.");
    break;
  default:
    document.write("You new messages.");
    break;
}

document.write("<br>")

var Day = "wednesday";
switch(Day) {
  case "sunday":
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
   document.write("it is work days");
   break;
  default:
   document.write("Happy weekend");
   break;
}