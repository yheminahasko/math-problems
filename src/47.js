function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Both arguments must be numbers.');
  let result = a;
  for (let i = 0; i < b; i++) result *= a;
  return result;
}

// Example usage:
console.log(multiply(3, 5)); // Output: 15
