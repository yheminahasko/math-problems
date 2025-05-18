// This is a JavaScript code snippet.
// It includes basic arithmetic operations such as addition,
// subtraction, multiplication, division, square root extraction,
// power calculation, and comparison operators. It also demonstrates how to use variables and functions.

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
    throw new Error("Division by zero is not allowed.");
}

function squareRoot(a) {
    return Math.sqrt(a);
}

function power(base, exponent) {
    return base ** exponent;
}

// Example usage
let sum = add(5, 3); // Output: 8
console.log(sum);

let result = subtract(10, 4.5); // Output: 5.5

let root = squareRoot(25); // Output: 5.0
console.log(root);

let powered = power(3, 2); // Output: 9

let squaredResult = multiply(2, 8); // Output: 16

let resultOfEqual = divide(4, 2); // Output: 2

let notZeroDividedByZero = divide(4, 0); // Output: Error: Division by zero is not allowed.
console.log(notZeroDividedByZero);
