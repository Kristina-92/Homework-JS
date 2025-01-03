//Task 3

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`The number ${number} is even`);
    } else {
      reject(`The number ${number} is odd`);
    }
  });
}

function handleSuccess(message) {
  console.log(message);
}

function handleError(error) {
  console.log(error);
}

checkNumber(32).then(handleSuccess).catch(handleError);

checkNumber(5).then(handleSuccess).catch(handleError);

checkNumber(41).then(handleSuccess).catch(handleError);

checkNumber(222).then(handleSuccess).catch(handleError);
