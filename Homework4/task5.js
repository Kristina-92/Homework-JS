function checkGrade(number) {
  number >= 90 && number <= 100
    ? console.log("Grade A")
    : number >= 80 && number <= 89
    ? console.loog("Grade B")
    : number >= 70 && number <= 79
    ? console.log("Grade C")
    : number >= 60 && number <= 69
    ? console.log("Grade D")
    : number >= 0 && number <= 59
    ? console.log("Grade F")
    : console.log("You have to enter a number between 0 and 100");
}

checkGrade(79);
checkGrade(99);
checkGrade(20);
checkGrade(67);
checkGrade("hello");
checkGrade(200);
