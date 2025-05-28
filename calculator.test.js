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

// Step 6: Custom delimiter with `//;\n`
test("supports custom delimiter using //;\\n syntax", () => {
  expect(add("//;\n1;2")).toBe(3);
});

// Step 7: Custom delimiter with other characters (e.g., '|')
test("supports custom delimiter with pipe symbol", () => {
  expect(add("//|\n4|5|6")).toBe(15);
});

// Step 8: Throws exception for one negative number
test("throws an exception for single negative number", () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
});

// Step 9: Throws exception for multiple negative numbers
test("throws an exception listing all negative numbers", () => {
  expect(() => add("-1,-3,5")).toThrow("negative numbers not allowed -1,-3");
});