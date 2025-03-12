function getRandomMathProblem() {
  const operators = ['+', '-', '*', '/'];
  const numbers = [1, 2, 3, 4, 5];

  let problem = `${numbers[Math.floor(Math.random() * numbers.length)]}`;
  let operator = operators[Math.floor(Math.random() * operators.length)];

  while (operator === '/' && problem % 2 !== 0) {
    problem = `${numbers[Math.floor(Math.random() * numbers.length)]}`;
    operator = operators[Math.floor(Math.random() * operators.length)];
  }

  return `What is ${problem} ${operator} ${numbers[Math.floor(Math.random() * numbers.length)]}?`;
}
