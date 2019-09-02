
# Day 14
In Day 14 we learn about Variable Scope and Operator in JavaScript.


## Boolean Values
A JavaScript Boolean represents one of two values: ```true``` or ```false```.

```
var a = 0;
if (a == 5)   // return false
document.write(a);
```
output: will not print anything because the condition is not met.

```
var a = 0;
if (a !== 5)  // return true
document.write(a);
```
output: 0 

### Arithmetic Operators

|Operator |Description|
|---|---|
|  + | Addition |
|  - | Subtraction |
|  * | Multiplication |
|  ** | Exponentiation |
|  / | Division |
|  % | Modulus |
|  ++ | Increment |
|  -- | Decrement |

### Assignment Operators

| Operator | Example |	Same As|
|---|---|---|
|=	| x = y	| x = y |
|+=	| x += y |	x = x + y |
|-=	| x -= y |	x = x - y |
|*=	| x *= y |  x = x * y |
|/=	| x /= y |  x = x / y |
|%=	| x %= y |  x + x % y |
|**=| x **= y | x = x ** y |


### Comparison Operators
| Operator	| Name |
|---|---|	
| == |	Equal to |
| ===| Equal value and type|
| != |	Not equal |	
| !==| Not equal value and type|
| >	 | Greater than	 |
| <	 | Less than |	
| >= |	Greater than or equal to |
| <= |	Less than or equal to |

### Conditional (Ternary) Operator
| Operator | syntax | Example|
|---|---|---|
| ? | variablename = (condition) ?  | ```voteable = (age < 18) ? "Too young":"Old enough";```

### Logical Operators
|Operator	|Description	|Example|
|---|---|---|	
|&&	|and|	(x < 10 && y > 1)|	
|\|\|	|or	|(x === 5 \|\| y === 5)|	
|!	|not|	!(x === y)|

## Variable Scope
Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. 
The two types of scope are local and global:
* Global variables are those declared outside of a block.
* Local variables are those declared inside of a block.