/*
Fizz Buzz
*/

console.log("-------------------------------------------");
console.log("Fizz Buzz");
console.log("-------------------------------------------");

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log();

/*
Fizz Buzz and Prime
*/
console.log("-------------------------------------------");
console.log("Fizz Buzz and Prime");
console.log("-------------------------------------------");

const primes = [];

for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i, "Prime");
  } else if (i % 15 === 0) {
    console.log(i, "FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i, "Fizz");
  } else if (i % 5 === 0) {
    console.log(i, "Buzz");
  } else {
    console.log(i);
  }
}

function isPrime(i) {
  for (p of primes) {
    if (i % p === 0) {
      return false;
    }
  }
  if (i > 1) {
    primes.push(i);
  }
  return true;
}