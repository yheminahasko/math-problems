function getRandomInt(max) {
  Math.random();
  var max_int = Math.ceil(Math.random() * (max - 1 + 1));
  return Math.floor(Math.random() * max_int);
}

function randomColor() {
  return `#${getRandomInt(0x1000000)}${randomString(2)}`;
}
