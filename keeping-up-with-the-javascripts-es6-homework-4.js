/*
  All men are mortal.
  Socrates is a man.
  Therefore, Socrates is mortal.
*/

printSyllogism("Socrates");
console.log('---');

printSyllogism("Stranger");
console.log('---');

printSyllogism("kitty");
console.log('---');

function printSyllogism(someone) {
  console.log("All men are mortal.");

  if (isMortal(someone)) {

    console.log(`${someone} is a man.`);
    console.log(`Therefore, ${someone} is mortal.`);

  } else {

    console.log(`${someone} is not a man.`);
    console.log(`Therefore, ${someone} might not be mortal.`);

  }
}

function isMortal(someone) {
  const men = ['man 1', 'man 2', '...', 'man N', 'Socrates', 'Stranger'];

  const isSomeoneAMan = men.indexOf(someone) !== -1;

  return isSomeoneAMan;
}

/*
  This cake is either vanilla or chocolate.
  This cake is not chocolate.
  Therefore, this cake is vanilla.
*/

function getCakeFlavor(possibleCakes, isCakeChocolate) {
  const chocolate = 'chocolate';

  for (cake of possibleCakes) {
    if (cake === chocolate && isCakeChocolate) {
      return cake;
    }
    if (cake !== chocolate && !isCakeChocolate) {
      return cake;
    }
  }

  return 'unknown';
}

const cakes = ['chocolate', 'vanilla'];

console.log(getCakeFlavor(cakes, true));
console.log(getCakeFlavor(cakes, false));
console.log(getCakeFlavor([], false));
