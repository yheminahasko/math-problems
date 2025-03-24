function sumSeries(n) {
  let series = 0;
  for (let i = 0; i < n; i++) {
    series += i * i + 1;
  }
  return series;
}

console.log(sumSeries(5)); // Output: 25
