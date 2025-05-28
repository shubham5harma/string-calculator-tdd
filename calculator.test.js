const add = require("./calculator");

// Step 1: Empty string
test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

// Step 2: One number
test("returns the number itself for a single number", () => {
  expect(add("1")).toBe(1);
});

// Step 3: Two numbers
test("returns the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

// Step 4: Multiple numbers
test("returns the sum of multiple comma-separated numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

// Step 5: Newline as delimiter
test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});


