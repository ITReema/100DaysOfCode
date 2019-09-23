# Day 34
In Day 34 we learn about ```this``` Keyword in JavaScript.

### What is this?
The JavaScript this keyword refers to the object it belongs to.

### this in a Method
In an object method, ```this``` refers to the owner object.
```
fullName : function() {
  return this.firstName + " " + this.lastName;
}
```

### this Alone
When used alone, ```this``` refers to the global object.
```
var x = this;
```

### this in a Function
In a function, ```this``` refers to the Global object [object Window].
```
function myFunction() {
  return this;
}
```