// toString
var number = [1, 2, 3] ;
number.toString();
document.write(number +"<br>");

// forEach
// example 1
var sum = 0;
var numbers = [1, 2, 3, 4];
numbers.forEach(myFunction);
function myFunction(item) {
	return sum += item;
}
document.write(sum  +"<br>");

// example 2
var numbers = [1,2,3,4];
numbers.forEach(myFunction)
function myFunction(item, index, arr) {
	arr[index] = item * 10;
}
document.write(numbers);
