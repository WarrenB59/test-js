const fusionArray = require("./fusionArray");

test("Fusionne deux tableaux", () => {
  let tab1 = [1, 2, 3];
  let tab2 = [4, 5, 6];
  expect(fusionArray(tab1, tab2)).toEqual([1, 2, 3, 4, 5, 6]);
  expect(fusionArray(tab1, tab2)).not.toBe([20, 39, 17, 24, 75, 16]);
});
