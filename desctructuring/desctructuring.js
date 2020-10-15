/*

Destructuring of object or array is ES2015 language feature,
which allows extracting a piease of an object or an array
into a variable(s) or function parameter(s).

It is appropriate to use when having a large an object or an array,
there is only a part of it is required for further processing.
For example,
1. there is an object with properties 'id', 'name', 'age', and the application
only 'age' property value is required.
2. there is an array of 10 elements, and further the application logic is based on
the value of the seconds element of the array.

*/

// example 1
const person = { id: 100500, name: "es6", age: 6 };
const { age } = person;
if (age > 5) {
  console.log(`ES6 is getting older, age: ${age} years old!`);
} else {
  console.log(`ES6 is too young, age: ${age} years old!`);
}

// example 2
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, secondItem] = items;
console.log({ secondItem });
