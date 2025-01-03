//Task 1

function printFunc(seconds) {
  if (typeof seconds !== "number" || seconds < 0) {
    console.log("Please enter a number");
  } else if (seconds > 9) {
    console.log("Please enter one digit number");
  } else {
    setTimeout(() => {
      console.log("Coding is not that hard!");
    }, seconds * 1000);
  }
}

printFunc(3);
// printFunc(55);
// printFunc(21);
// printFunc(9);
// printFunc(10);
// printFunc("hello");
// printFunc(-5);
