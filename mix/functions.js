// const greeter = (greeting) => (name) => greeting + ", " + name;

// const englishGreeter = greeter("Hello");
// const frenchGreeter = greeter("Bounjour");

// console.log(englishGreeter("mova"));
// console.log(frenchGreeter("mike"));

function multiply(x = 2, y = 3) {
  console.log("x = ", x, "y = ", y);

  return x * y;
}

// console.log(multiply(1, 2));
// console.log(multiply(2, 3));
console.log(multiply(10));
console.log(multiply());
console.log(multiply(20, null));
console.log(multiply(20, undefined));
// console.log(multiply(30, 0));
