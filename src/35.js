function calculateArea(rectangle) {
  const width = rectangle.width;
  const height = rectangle.height;

  if (width > height) {
    return width * height;
  } else {
    return height * width;
  }
}

function findMaxCommonElements(array1, array2) {
  let commonElements = [];

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[0]) {
      commonElements.push(array1[i]);
    }
  }

  return commonElements;
}

function printMessage(message, delay) {
  setTimeout(() => {
    console.log(`${message} in ${delay} seconds`);
  }, delay);
}

calculateArea({ width: 4, height: 6 });
findMaxCommonElements([2, 3, 4], [5, 7, 8]);
printMessage("Hello, World!", 1000);
