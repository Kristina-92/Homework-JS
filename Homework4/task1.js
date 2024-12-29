//Task 1

let books = [
  { title: "Book 1", author: "Author A", year: 2000 },
  { title: "Book 2", author: "Author B", year: 2010 },
  { title: "Book 3", author: "Author C", year: 2020 },
];

//1.1
books.forEach((book) => console.log(book.title, ",", book.author));

//1.2
const firstBookEditionAfter2000 = books.find((book) => book.year > 2000);
console.log("First book after 2000:", firstBookEditionAfter2000);
