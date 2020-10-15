function reverseJsonArray(jsonArray) {
  try {
    const parsedObject = JSON.parse(jsonArray);

    if (!(parsedObject instanceof Array)) {
      return false;
    }

    const inputArray = parsedObject;

    const reversedArray = [];
    reversedArray.length = inputArray.length;

    for (let i = 0; i < inputArray.length; i++) {
      reversedArray[reversedArray.length - 1 - i] = inputArray[i];
    }

    return JSON.stringify(reversedArray);
  } catch (error) {
    console.error(error);
    return false;
  }
}

console.log(reverseJsonArray(JSON.stringify(["a", "b", "c", 1, 2])));
console.log(
  reverseJsonArray(
    JSON.stringify([
      { id: "first object" },
      true,
      false,
      1,
      NaN,
      2,
      ["sub item1", "sub item2"],
    ])
  )
);

console.log(reverseJsonArray());
console.log(reverseJsonArray(true));
console.log(reverseJsonArray(false));
console.log(reverseJsonArray(["a", "b", "c", 1, 2]));
console.log(reverseJsonArray("{invalid json here}"));
console.log(reverseJsonArray('["a single element array"]'));
console.log(reverseJsonArray("[]"));
console.log(reverseJsonArray("[10,2]"));
console.log(reverseJsonArray("[1,20,3]"));
console.log(reverseJsonArray(NaN));
console.log(
  reverseJsonArray(
    JSON.stringify(
      Array.from("This test will be converted into an Array and transformed.")
    )
  )
);
