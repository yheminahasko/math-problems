function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, next = 0;

  while (next < n) {
    [a, next] = [b, a + b];
  }

  return b;
}

// Example usage:
console.log(fibonacci(10)); // Output: 55
