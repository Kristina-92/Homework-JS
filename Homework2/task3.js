//Задача 3.
// Да се напишат 3 функции од кои што:
// првата функција потребно е да има три параметри(numbers) и да го враќа збирот од тие три броеви
// втората функција потребно е да има еден параметар(string) и да го враќа истиот тој string
// третата функција потребно е да има два параметри(numbers) и да ги споредува истите. Ако броевите се исти, да ја испечати пораката "These numbers are equal" во спротивно да испечати "These numbers are not equal"

//1
function sumOfNumbers(x, y, z) {
  let sum = x + y + z;
  return sum;
}

console.log(sumOfNumbers(3, 8, 10));

// 2
const stringFunction = (str) => {
  return str;
};

console.log(stringFunction("hello!"));

//3
const numberComparison = (num1, num2) => {
  if (num1 === num2) {
    console.log(`These numbers (${num1} and ${num2}) are equal`);
  } else {
    console.log(`These numbers (${num1} and ${num2}) are not equal`);
  }
};

numberComparison(3, 7);
numberComparison(5, 5);
