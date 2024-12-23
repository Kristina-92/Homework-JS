// Задача 1.
// Да се креира:

// a. објект кој што опишува книга
// б. објект кој што опишува автомобил
// в. објект кој што опишува студент

// Секој од овие објекти да имаат барем по еден вгнезден објект или низа.

//a
let book = {
  title: "Harry Potter",
  author: "J.K.Rowling",
  genre: "fantasy",
  edition: {
    1997: "Philosopher's Stone",
    1998: "Chamber of Secrets",
    1999: "Prisoner of Azkaban",
    2000: "Goblet of Fire",
    2003: "Order of the Phoenix",
    2005: "Half-Blood Prince",
    2007: "Deathly Hallows",
  },
};

//b
let car = {
  name: "Fiat",
  model: 500,
  color: ["red", "white", "black"],
  year: 2018,
};

//v
let student = {
  name: "Mike",
  age: 22,
  address: {
    city: "New York",
    zip: 10012,
  },
  grades: {
    math: "A",
    physics: "B",
    history: "B",
    economics: "A",
  },
};
