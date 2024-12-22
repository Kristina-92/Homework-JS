//Задача 2.
// a. Да се декларира променлива score koja што иницијално ќе има вредност од 78. Потоа да се напишат услови користејќи if, else if и else, такашто ќе ја одредите соодветната оценка врз основа на следната скала за оценување:
// 90 - 100: Grade: А
// 80 - 89: Grade: B
// 70 - 79: Grade: C
// 60 - 69: Grade: D
// 0 - 59: Grade: F
// Пр. Доколку score ja има вредноста 90, во конзола треба да се испринта: Grade: A. Доколку score има вредност што е поголема од 100 или помала од 0, да се испринта пораката: “Invalid score! Please enter a score between 0 and 100”.
// б. Декларирајте променлива dayNumber и доделете ѝ нумеричка вредност помеѓу 1 и 7. (Да претпоставиме дека 1 е недела, 2 е понеделник и така натаму.) Користете switch за да го одредите соодветниот ден во неделата врз основа на дадениот dayNumber.
// Пр. Доколку dayNumber има вредност 2, во конзола треба да се испечати: The day is Monday. Доколку вредноста не е број кој што се наоѓа помеѓу 1 и 7, да се испечати: Invalid day number. Please enter a number between 1 and 7.

//a

let score = 78;
// let score = 100;
// let score = 55;
// let score = 105;
// let score = -25;
// let score = 69;
// let score = 92;

if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 80 && score <= 89) {
  console.log("Grade: B");
} else if (score >= 70 && score <= 79) {
  console.log("Grade: C");
} else if (score >= 60 && score <= 69) {
  console.log("Grade: D");
} else if (score >= 0 && score <= 59) {
  console.log("Grade: F");
} else {
  console.log("Invalid score. Please enter a score between 0 and 100!");
}

console.log(score);

//b
let dayNumber = 2;

switch (dayNumber) {
  case 1:
    console.log("The day is Sunday");
    break;
  case 2:
    console.log("The day is Monday");
    break;
  case 3:
    console.log("The day is Tuesay");
    break;
  case 4:
    console.log("The day is Wednesday");
    break;
  case 5:
    console.log("The day is Thursday");
    break;
  case 6:
    console.log("The day is Friday");
    break;
  case 7:
    console.log("The day is Saturday");
    break;
  default:
    console.log("Invalid number. Please enter a number between 1 and 7");
}
