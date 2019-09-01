# Day 13 
In Day 13 we learn about String in JavaScript.

In JavaScript, a string is a sequence characters enclosed in single or double quotes.

```'abc' === "abc"```

## Escape Sequences in Strings
| Character| Name |
| ---      | ---  |
|```\t ``` |tab|
|```\n ``` |new line|
|```\" ``` |Double quote|
|```\' ``` |single quote |
|```\\ ``` |Backslash |


## String Length
The length property returns the length of a string:<br>
```
var x = "Hello"
document.write(x.length)
``` 

## Extracting String Characters
* ```charAt(position)``` <br> 
The ```charAt()``` method returns the character at a specified index in a string.


## Extracting String Parts
* ```substring(start, end)``` <br>
* ```slice(start, end)``` <br>
Extracts a part of a string and returns the extracted part in a new string.
The ```substring()``` is similar to ```slice()```.

## Finding a String in a String
The ```indexOf()``` method returns the index of the first occurrence of a specified text in a string.<br>
The ```lastIndexOf()``` method returns the index of the last occurrence of a specified text in a string.<br>
Both ```indexOf()```, and ```lastIndexOf()``` return -1 if the text is not found.

## Converting a String to an Array
A string can be converted to an array with the ```split()``` method.

## Replacing String Content
The ```replace()``` method replaces a specified value with another value in a string

## Converting to Upper and Lower Case
* A string is converted to upper case with ```toUpperCase()```.<br>
* A string is converted to lower case with ```toLowerCase()```.<br>