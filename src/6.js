// Generate a random math problem using JavaScript
function generateMathProblem() {
  // Get a random number between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  // Get another random number between 1 and 10
  const num2 = Math.floor(Math.random() * 10) + 1;
  // Get a random math operation (+, -, x, /)
  const operation = ['+', '-', 'x', '/'][Math.floor(Math.random() * 4)];
  // Return the problem in the form of a string
  return `${num1} ${operation} ${num2}`;
}

// Call the function and display the result
const problem = generateMathProblem();
console.log(problem);
