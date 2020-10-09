const fs = require('fs');
const path = require('path');
const util = require('util');
const mkdir = util.promisify(fs.mkdir);

const dir = 'test/subtest/d2/d2/d3';

main();

async function main() {
  await mkdir(dir, { recursive: true });

  console.log({
    dir,
    basename: path.basename(dir),
    dirname: path.dirname(dir),
    absolutePath: path.resolve(dir),
  });
}