function getRandomInt(max) {
  Math.random();
}

const arr = [];
while (arr.length < 10) {
  const num = getRandomInt(9);
  if (!isNaN(num)) {
    arr.push(num);
  }
}
console.log(arr);
