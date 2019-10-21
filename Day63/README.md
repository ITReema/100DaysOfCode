# Day 63
In Day 63 we learn about  Function in JavaScript.

### Function

* Functions can be used as values: <br>
**Example**
```
function myFunction(a, b) {
return a * b;
}
var x = myFunction(4, 3);
```

* Self-Invoking functions: <br>
A self-invoking expression is invoked (started) automatically, without being called. Function expressions will execute automatically if the expression is followed by ().<br>
**Example**
```
(function () {
var x = "Hello!!";  // I will invoke myself
})();
```

* Function expressions <br>
A JavaScript function can also be defined using an expression. A function expression can be stored in a variable <br>
**Example**
```
var x = function (a, b) {return a * b};
```

* The function() constructor <br>
JavaScript functions are defined with the function keyword.
Functions can also be defined with a built-in JavaScript function constructor called Function(). <br>

**Example**
```
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
```
