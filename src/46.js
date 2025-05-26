function multiply(numbers) {
    let result = 1;
    numbers.forEach(number => {
        result *= number;
    });
    return result;
}
