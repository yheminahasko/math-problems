function sumNumbers(a, b) {
  return a + b;
}

function calculateAverage(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array of numbers.");
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

function sortNumbers(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}
