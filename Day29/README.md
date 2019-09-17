# Day 29
In Day 29 we learn about ```try```/```catch```/```finally``` statement in JavaScript.

### The try/catch/finally statement
The ```try```/```catch```/```finally```  statement handles some or all of the errors that may occur in a block of code, while still running code.

Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

* The ```try``` statement allows you to define a block of code to be tested for errors while it is being executed.

* The ```catch``` statement allows you to define a block of code to be executed, if an error occurs in the try block.

* The ```finally``` statement lets you execute code, after try and catch, regardless of the result.

**Syntax:**
```
try {
  tryCode - Block of code to try
}
catch(err) {
  catchCode - Block of code to handle errors
}
finally {
  finallyCode - Block of code to be executed regardless of the try / catch result
}
```
