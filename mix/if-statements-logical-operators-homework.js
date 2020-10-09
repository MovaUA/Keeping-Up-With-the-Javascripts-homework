/*
  All men are mortal
  Socrates is a man.
  Therefore, socrates is mortal.
*/

const socrats = 'Socrats';
const someone = 'Stranger';
const cat = "Cute cat";

const men = ['man 1', 'man 2', '...', 'man N', socrats, someone];

checkIfMortal(socrats);
checkIfMortal(someone);
checkIfMortal(cat);

function checkIfMortal(someone) {
  console.log("All men are mortal.");

  const isSomeoneAMan = men.indexOf(someone) !== -1;

  if (isSomeoneAMan) {
    console.log(`${someone} is a man.`);
    console.log(`Therefore ${someone} is mortal.`);
  } else {
    console.log(`${someone} is not a man.`);
    console.log(`${someone} might be mortal anyway.`);
  }

  console.log('*************************************************************************************');
}

/*
  This cake is either vanilla or chocolate.
  This cake is not chocolate.
  Therefore, this cake is vanilla.
*/

const vanilla = 'vanilla';
const chocolate = 'chocolate';

const cakes = [vanilla, chocolate];

const thisCake = vanilla;

const thisIsACake = cakes.indexOf(thisCake) !== -1; ``

if (thisIsACake) {
  console.log('This cake is either vanilla or chocolate.');

  const thisIsChocolateCake = thisCake === chocolate;

  if (!thisIsChocolateCake) {
    console.log('This cake is not chocolate.');
    console.log('Therefore, this cake is vanilla.');
  }
}
