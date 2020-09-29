console.log(this);

function smth() {
  console.log(this);
}

smth();

const o1 = new smth();


// const arr = () => {
//   console.log(this);
// };

// arr();
