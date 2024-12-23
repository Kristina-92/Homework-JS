// Задача 6.
// Креирајте низа од 10 градови и испечатети ги во конзола со помош на:

// a. for-in циклус
// б. for-of циклус

let cities = [
  "Skopje",
  "Bitola",
  "Ohrid",
  "Krushevo",
  "Kumanovo",
  "Kavadarci",
  "Berovo",
  "Kratovo",
  "Gevgelija",
  "Kavadarci",
];

//a
for (let i in cities) {
  console.log(cities[i]);
}

//b

for (let city of cities) {
  console.log(city);
}
