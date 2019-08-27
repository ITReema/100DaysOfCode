# Day 8 
In Day 8 we learn about Semicolons in JavaScript.

## The rules of JavaScript automatic semicolon insertion

The JavaScript parser will automatically add a semicolon when, during the parsing of the source code, it finds these particular situations:

1. when the next line starts with a ```}```, closing the current block
2. when the end of the source code file is reached
3. when there is a ```return``` statement on its own line
4. when there is a ```break``` statement on its own line
5. when there is a ```throw``` statement on its own line
6. when there is a ```continue``` statement on its own line

## Required semicolons: 
When two statements are on the same line.

The semicolon is only obligatory when you have two or more statements on the same line:<br>
```var a=3; var b=5;```

## Optional semicolons : 
After statements.

The semicolon in JavaScript is used to separate statements, but it can be omitted if the statement is followed by a line break (or there’s only one statement in a {block}). 

```
var a=3;
var b=5;
```
## Avoid semicolons:
1. After a closing curly bracket
```// NO semicolons after }:
if  (...) {...} else {...}
for (...) {...}
while (...) {...}
```
2. After the round bracket of an ```if```, ```for```, ```while``` or ```switch``` statement
```if (0 === 1); { alert("hi") }```
This code will alert "hi", but not because 0 equals 1, but because of the semicolon. It makes JavaScript think that you have an empty statement there, and everything to the right of it is treated as no longer belonging to the if conditional and thus independent of it.
