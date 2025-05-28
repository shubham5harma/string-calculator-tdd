function add(numbers) {
  if (numbers === "") return 0;

  let delimiterRegex = /,|\n/;
  let numbersString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEndIndex);
    const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    delimiterRegex = new RegExp(escapedDelimiter);
    numbersString = numbers.substring(delimiterEndIndex + 1);
  }

  const nums = numbersString.split(delimiterRegex).map(Number);

  // Check for negatives
  const negatives = nums.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = add;
