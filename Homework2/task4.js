// Задача 4.
// а. Направете променлива age и доделете ѝ број што ја претставува вашата возраст. Користете if-else за да проверите дали можете легално да купите алкохол, да гласате, двете или ниту едно од нив. Да се претпостави дека со наполнети 18 години може да гласате но не и да купите алкохол додека пак со наполнети 21 година имате право на двете. Користете console.log за да печатите соодветна порака во конзола.

// б. Да се декларира функција која што ќе има еден параметар month. Внатре во функцијата да се искористи switch услов кој што за даден месец како аргумент, ќе го враќа бројот на денови од тој месец. За Февруари да се претпостави дека секогаш ќе има 28 дена. Доколку се внесе вредност која што не е месец, да се испринта “Invalid input” во конзолата. Пр. Input: “June”, Output: 30

// в. Направете променлива temperature и доделете ѝ број што ја претставува температурата во Целзиусови. Користете if-else за да одредите дали надвор е жешко, топло или ладно. За жешко сме смета температура над 30 степени, за топло над 20 додека пак за ладно се смета температура под 15 степени. Степените помеѓу 15 и 20 се сметаат за умерено време. Користете console.log за да печатите соодветна порака во конзола.

//a
// let age = 28;
// let age = 20;
let age = 14;
// let age = 38;

if (age >= 18 && age < 21) {
  console.log(`At the age of ${age} you can vote, but you cannot buy alcohol`);
} else if (age >= 18 && age >= 21) {
  console.log(`At the age of ${age} you can vote, and you can buy alcohol`);
} else {
  console.log(`At the age of ${age} you cannot vote and buy alcohol`);
}

//b
const daysInMonth = (month) => {
  switch (month) {
    case "january":
      console.log(`${month} has 31 days`);
      break;
    case "february":
      console.log(`${month} has 28 days`);
      break;

    case "march":
      console.log(`${month} has 31 days`);
      break;

    case "april":
      console.log(`${month} has 30 days`);
      break;

    case "may":
      console.log(`${month} has 31 days`);
      break;

    case "june":
      console.log(`${month} has 30 days`);
      break;

    case "july":
      console.log(`${month} has 31 days`);
      break;

    case "august":
      console.log(`${month} has 31 days`);
      break;

    case "september":
      console.log(`${month} has 30 days`);
      break;

    case "october":
      console.log(`${month} has 31 days`);
      break;

    case "november":
      console.log(`${month} has 30 days`);
      break;

    case "december":
      console.log(`${month} has 31 days`);
      break;

    default: {
      console.log("Invalid input");
    }
  }
};
daysInMonth("april");
daysInMonth("january");
daysInMonth("december");
daysInMonth("monday");

//v
// let temperature = 35;
// let temperature = 45;
// let temperature = 55;
// let temperature = -15;
// let temperature = 10;
let temperature = 1;
// let temperature = 20;
// let temperature = 15;
// let temperature = "yes";

if (temperature > 30) {
  console.log(`Outside is ${temperature}°C. It is hot!`);
} else if (temperature > 20 && temperature <= 30) {
  console.log(`Outside is ${temperature}°C. It is warm!`);
} else if (temperature < 15) {
  console.log(`Outside is ${temperature}°C. It is cold!`);
} else if (temperature >= 15 && temperature <= 20) {
  console.log(`Ouside is ${temperature}°C. It is mild!`);
} else {
  console.log("Invalid input");
}
