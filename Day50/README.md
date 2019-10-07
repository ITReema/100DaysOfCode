# Day 50
In Day 50 we learn about Deleting Array Elements in JavaScript.

### Deleting Array Elements
Removing JavaScript Array items is important to managing your data. There is not a single 'remove' method available, but there are different methods and techniques you can use to clean unwanted array items.

* Elements in array can be deleted by using the operator ```delete```:
```
var fruits = ["Banana", "Orange", "Apple"];
delete fruits[0]; 
```
* Clear or reset array:
```
var array = [1, 2, 3];
array = []; //a new, empty array!
```
* Clear an array is to set its ```length``` property to 0.
```
var array = [1, 2, 3];
array.length = 0;
```
