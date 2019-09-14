var i = 0;
for(var count =1 ; count <= 10 ; count++){
  
  checkEvenNum:
  while(count % 2 == 0){
    document.write(count + " is even number <br>");
    break;
  }
  
  checkOddNum:
  i = count 
  while (i % 2 != 0){ 
    document.write(i + " is odd number <br>")
    i++
    continue;
  } 
  
}
