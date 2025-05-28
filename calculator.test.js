const add = require("./calculator");

// Test for empty string.
test("return 0 for empty string", () => {
  expect(add("")).toBe(0);
});


// Test for one number.
test('returns the number when one number is given', () => {
  expect(add("5")).toBe(5);
});

// Test for two number.
test('returns the sum of two numbers', () => {
  expect(add("1,2")).toBe(3);
});


