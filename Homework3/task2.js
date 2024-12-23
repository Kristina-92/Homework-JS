// Задача 2.
// а. Да се напише jамка (for loop) кој што ќе итерира броеви од 0 до 10. Броевите да се испечатат во конзола.

// б. Декларирајте две променливи start и end и доделете им нумерички вредности (на пр., 3 и 10). Користете јамка(for loop) за повторување низ броевите од почеток до крај. Внатре во јамката, проверете дали моменталниот број е парен. Ако е парен, додајте го во вкупниот број. По јамката, испечатете го збирот на парни броеви.

// в. Декларирајте објект со име person со следниве својства:
// name: Your name
// age: Your age
// city: Your city
// Користете јамка (for-in) за да итерирате низ својствата на објектот на person и да ги испечатите во следниот формат: property: value
// Пр. name: Jovan age: 27 city: Bitola

// г. Декларирајте низа со име colors со најмалку три различни имиња на бои (на пр., "red", "green", "blue"). Користете јамка (for-of) за повторување низ низата бои и печатење на имињата на боите заедно со бројот на карактери што ги содржи бојата.
// Пр. 3 red 5 green 4 blue

//a
for (let num = 0; num <= 10; num++) {
  console.log(num);
}

//b
let start = 3;
let end = 10;
let sumOfEvenNumbers = 0;

for (let num = start; num <= end; num++) {
  if (num % 2 === 0) {
    sumOfEvenNumbers += num;
  }
}
console.log(sumOfEvenNumbers);

//v
let person = {
  name: "Marko",
  age: 35,
  city: "Skopje",
};

for (let key in person) {
  console.log(key, ":", person[key]);
}

//g
let colors = ["red", "green", "purple", "white", "black", "blue"];

for (let color of colors) {
  console.log(color.length, color);
}
