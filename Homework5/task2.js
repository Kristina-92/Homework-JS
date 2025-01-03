//Task 2

//2-1
const isCoffeeAvailable = true;

function orderCoffee() {
  return new Promise((resolve, reject) => {
    if (isCoffeeAvailable) {
      resolve("Your coffee order is placed");
    } else {
      reject("Your order cannot be accepted at the moment");
    }
  });
}

// orderCoffee()
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

async function getCoffeMessage() {
  try {
    const coffeAvailability = await orderCoffee();
    console.log(coffeAvailability);
  } catch (error) {
    console.error(error);
  }
}

// getCoffeMessage();

//2-2
function isNumberEven() {
  return new Promise((resolve, reject) => {
    let number = 22;
    if (number % 2 === 0) {
      resolve(`The number ${number} is even`);
    } else {
      reject(`The number ${number} is odd`);
    }
  });
}

// isNumberEven()
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));

async function checkNumber() {
  try {
    const response = await isNumberEven();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// checkNumber();

//2-3
function waitForResponse(waitTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (waitTime <= 20) {
        resolve("Wait time acceptable");
      } else {
        reject("It takes too long to access the data");
      }
    }, 2500);
  });
}

// waitForResponse(15)
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));

async function checkWaitTime() {
  try {
    const isWaitTimeAcceptable = await waitForResponse(24);
    console.log(isWaitTimeAcceptable);
  } catch (error) {
    console.error(error);
  }
}
// checkWaitTime();

//2-4

function userLogInDetails(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "name" && password === "password") {
        resolve("User log in details correct");
      } else {
        reject("User log in details incorrect");
      }
    }, 1000);
  });
}

// userLogInDetails("name", "wrongPassword")
//   .then((response) => console.log(response))
//   .catch((error) => console.log("Error:", error));

async function checkLogInDetails() {
  try {
    const logInMessage = await userLogInDetails("name", "password");
    console.log("Success:", logInMessage);
  } catch (error) {
    console.log("Error:", error);
  }
}

// checkLogInDetails();

//2-5

let animals = ["giraffes", "lions", "tigers", "monkeys", "zebras"];

function checkAnimal(animal) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalGroupFound = animals.find((a) => a === animal);
      if (animalGroupFound) {
        resolve(`Animal group ${animal} is in the array of animals`);
      } else {
        reject(`Animal group ${animal} is not in the array of animals`);
      }
    }, 1500);
  });
}

checkAnimal("lions")
  .then((response) => console.log(response))
  .catch((error) => console.log("Error:", error));

async function isAnimalPresent() {
  try {
    const isAnimalGroupFound = await checkAnimal("snakes");
    console.log("Success:", isAnimalGroupFound);
  } catch (error) {
    console.log("Error:", error);
  }
}

isAnimalPresent();
