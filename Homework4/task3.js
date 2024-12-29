//Task 3

//a
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let countriesEndOnLand = countries
  .filter((country) => country.slice(-4) === "land")
  .map((country) => country.toUpperCase());

console.log(countriesEndOnLand);

//b
let countriesEndingOnIa = countries.filter(
  (country) => country.slice(-2) === "ia" && country.length > 7
);

console.log(countriesEndingOnIa);
