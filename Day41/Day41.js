function Person1() {}
function Person2() {}
Person1.prototype = Object.create(Person2.prototype);
const Person3 = new Person2();
console.log(Person1.prototype.isPrototypeOf(Person3));
console.log(Person2.prototype.isPrototypeOf(Person3));