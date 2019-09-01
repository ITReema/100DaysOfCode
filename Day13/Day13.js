var s = "hello, world" 
s.charAt(0) //rewturn h
s.charAt(s.length-1) //return d 
s.substring(1,4) //return ell
s.slice(1,4) //return ell
s.slice(-3)  //return rld
s.indexOf("l") //return 2
s.lastIndexOf("l") //return 10
s.indexOf("l,3") //return -1
s.split(",") //return hello, world
s.replace("h","H") //return Hello, world
s.toUpperCase() //return HELLO, WORLD