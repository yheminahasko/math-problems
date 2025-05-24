// Example of an infinite loop
let counter = 0;

function countDown() {
    if (counter >= 1) {
        console.log(counter);
        counter--;
    } else {
        return;
    }
}

countDown();
