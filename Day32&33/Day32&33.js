try {
  var x = Number(prompt("Please enter first number: "));
  var y = Number(prompt("Please enter second number: "));
  if ( y == 0 ){ 
    throw( "Error: Divide by zero" ); 
  } else { 
    alert( "Divide " + x +" / " + y  + "= "+ x/y);
  }
}
catch(err) {
  alert(err);
}
finally{
 console.log("done!");
} 
