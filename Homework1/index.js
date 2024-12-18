//Exercise 1

let hasCoffee = true;
let hasTea = false;
let hasMilk = true;

let teaOrMilk = hasTea || hasMilk; //true
let bothCoffeAndTea = hasCoffee && hasTea; //false
let notTea = !hasTea; //true
let coffeeOrMilkNotBoth = (hasCoffee || hasMilk) && !(hasCoffee && hasMilk); //false
let TeaAndMilkOrCoffeeAndTea = (hasTea && hasMilk) || (hasCoffee && hasTea); //false
let notCoffeeNorTea = !hasCoffee && !hasTea; //false

console.log(teaOrMilk);
console.log(bothCoffeAndTea);
console.log(notTea);
console.log(coffeeOrMilkNotBoth);
console.log(TeaAndMilkOrCoffeeAndTea);
console.log(notCoffeeNorTea);

//Exercise 2

const number1 = 10;
const number2 = 5;
const number3 = 8;
const number4 = 2;
const number5 = 12;
const number6 = 4;
const number7 = 3;

const result1 = (number1 - number3) * (number6 * number2) - number5 * number7;
const result2 = number5 * number4 - number5 / number7;
const result3 = number2 - number6 + number3 * number7;
const result4 = (number7 * number1) / (number2 * number4);
const result5 = number5 * (number3 - number2) + number7 * (number5 % number2);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

//Exercise 3

let num1 = 12;
let num2 = 4;

let sum = num1 + num2;
let diff = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
let rem = num1 % num2;

console.log(sum, diff, mult, div, rem);
