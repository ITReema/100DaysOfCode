# Day 17
In Day 17 we learn about Conditional Statements (```switch```)in JavaScript.

## Switch Statement
- ```switch``` statement is used to perform different actions based on different conditions. use the ```switch``` statement to select one of many code blocks to be executed.

#### Syntax:
```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
* The switch expression is evaluated once.
* The value of the expression is compared with the values of each case.
* If there is a match, the associated block of code is executed.

### ```break``` Keyword
When JavaScript reaches a ```break``` keyword, it breaks out of the switch block. This will stop the execution of inside the block. 

### ```default``` Keyword
The ```default``` keyword specifies the code to run if there is no case match.
