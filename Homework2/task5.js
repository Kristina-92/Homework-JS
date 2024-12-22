// Задача 5.
// Да се напише функција која што ќе има еден параметар number која што ќе користи console.log за печатење во конзола со следниве услови. За броеви деливи со 3, да го отпечати зборот „Fizz“ за броеви деливи со 5 (а не со 3), да се отпечати зборот „Buzz“, а за броеви кои се деливи и со 3 и со 5 да се испечати зборот “FizzBuzz”. Доколку внесениот аргумент не исполнува ниту еден од овие услови, да се испечати самиот број во конзола.

function numbers(number) {
  if (number % 3 === 0 && number % 5 !== 0) {
    console.log("Fizz");
  } else if (number % 5 === 0 && number % 3 !== 0) {
    console.log("Buzz");
  } else if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(number);
  }
}

numbers(3);
numbers(5);
numbers(15);
numbers(9);
numbers(10);
numbers(12);
numbers(8);
