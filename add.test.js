const addNum = require("./add");

/* On test d'abord qqch qui sera faux 
pour écarter toute éventualité. Ceci
montrera que la logique de ce que l'on
teste est correcte */

// test("Additionne 2 nombres", () => {
//   expect(addNum(2, 3)).toBe(59);
// });

test("Additionne 2 nombres", () => {
  expect(addNum(2, 3)).toBe(5);
});
