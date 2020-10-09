/*
--------------------------------------------------------------------------------------------------
var statement declares (and optionally initializes) function-scoped or globally-scoped variable.
--------------------------------------------------------------------------------------------------
*/

var a; // global scope variable declaration

var b = 1; // global scope variable declaration and initialization

function playWithVar() {
  a = "do't do this"; // global variable is assigned a value (bad practice example 😁)

  if (b === 1) { // using global variable
    var iAmLocalVar = 'local'; // declaration and initialization of function-scoped local variable.
  }

  // prints the following to console:
  // { iAmLocalVar: 'local' }
  console.log({ iAmLocalVar }); // using function-scoped local variable here.
}

playWithVar();

/*
--------------------------------------------------------------------------------------------------
let statement declares (and optionally initializes) block-scoped or globally-scoped variable.
--------------------------------------------------------------------------------------------------
*/

// declare and initialize globally scoped variable:
let student = {
  firstName: "Valeriy",
  lastName: "Molchanov",
};

function levelUp() {
  // declare and initialize block scoped variable (body of levelUp function)
  let name = student.firstName;

  function printName() {
    console.log(name);
  }

  printName();

  if (true) {
    let fullName = name + " " + student.lastName;
  }

  // fullName 'let' variable is not accessible here.
  // the following code would produce an error - ReferenceError: fullName is not defined
  // console.log(fullName);
}

levelUp();

/*
--------------------------------------------------------------------------------------------------
const statement declares (and optionally initializes) block-scoped or globally-scoped constant,
it can not be re-assigned nor re-declared (in the scope where it is declared).
--------------------------------------------------------------------------------------------------
*/

// declare global constant:
const times = 3;

function greet() {
  // declare block scope constant (here block is body of greet() function):
  const message = "hip, hip, hurray!";

  // 'const' can not be re-assigned:
  // message = "TypeError: Assignment to constant variable.";

  // 'const' can not be re-declared in the same scope:
  // const message = "SyntaxError: Identifier 'message' has already been declared";

  for (let i = 0; i < times; i++) {
    // it is valid to re-declare const here, since it is other (inner) scope.
    const message = "Hip, hip, hurray!!!";
    console.log(message);
  }

  // this will print "hip, hip, hurray!"
  console.log(message);
}

greet();


/*
--------------------------------------------------------------------------------------------------
hoisting in JavaScript is a way to move declarations into the beginning of then scope.
it works for functions and variables (at least).
--------------------------------------------------------------------------------------------------
*/

// here we can invoke a function which is declared further in the file.
// this is possible because of hoisting.
hoistingBonusInAction();

// absolutely weird (but valid) function:
function hoistingBonusInAction() {
  // it is possible to use 'var' variable declared further in the function,
  // even in the sub-scope because 'var' are function-scoped.
  // prints 'undefined', because varI is not initialized at this point
  console.log(varI);

  varI = 1;

  if (varI === 1) {
    // this is where varI is declared:
    var varI;
  }

  // prints 1
  console.log(varI);
}

