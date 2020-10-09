main();

const done = 'done!';

async function main() {
  await smth();

  console.log(done);
}

async function smth() {
  await sleep(3000);

  console.log('3 seconds passed.');
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
