//Task 4

let zooAnimals = [
  {
    id: "0938aa23-f153-4937-9f88-4858b24d6bce",
    name: "lions",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Zena",
        sex: "female",
        age: 12,
      },
      {
        name: "Maxwell",
        sex: "male",
        age: 15,
      },
      {
        name: "Faustino",
        sex: "male",
        age: 7,
      },
      {
        name: "Dee",
        sex: "female",
        age: 14,
      },
    ],
  },
  {
    id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
    name: "tigers",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Shu",
        sex: "female",
        age: 19,
      },
      {
        name: "Esther",
        sex: "female",
        age: 17,
      },
    ],
  },
  {
    id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
    name: "bears",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Hiram",
        sex: "male",
        age: 4,
      },
      {
        name: "Edwardo",
        sex: "male",
        age: 4,
      },
      {
        name: "Milan",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
    name: "penguins",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Joe",
        sex: "male",
        age: 10,
      },
      {
        name: "Tad",
        sex: "male",
        age: 12,
      },
      {
        name: "Keri",
        sex: "female",
        age: 2,
      },
      {
        name: "Nicholas",
        sex: "male",
        age: 2,
      },
    ],
  },
  {
    id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
    name: "otters",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Neville",
        sex: "male",
        age: 9,
      },
      {
        name: "Lloyd",
        sex: "male",
        age: 8,
      },
      {
        name: "Mercedes",
        sex: "female",
        age: 9,
      },
      {
        name: "Margherita",
        sex: "female",
        age: 10,
      },
    ],
  },
  {
    id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
    name: "frogs",
    popularity: 2,
    location: "SW",
    residents: [
      {
        name: "Cathey",
        sex: "female",
        age: 3,
      },
      {
        name: "Annice",
        sex: "female",
        age: 2,
      },
    ],
  },
  {
    id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
    name: "snakes",
    popularity: 3,
    location: "SW",
    residents: [
      {
        name: "Paulette",
        sex: "female",
        age: 5,
      },
      {
        name: "Bill",
        sex: "male",
        age: 6,
      },
    ],
  },
  {
    id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
    name: "elephants",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Ilana",
        sex: "female",
        age: 11,
      },
      {
        name: "Orval",
        sex: "male",
        age: 15,
      },
      {
        name: "Bea",
        sex: "female",
        age: 12,
      },
      {
        name: "Jefferson",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
    name: "giraffes",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Gracia",
        sex: "female",
        age: 11,
      },
      {
        name: "Antone",
        sex: "male",
        age: 9,
      },
      {
        name: "Vicky",
        sex: "female",
        age: 12,
      },
      {
        name: "Clay",
        sex: "male",
        age: 4,
      },
      {
        name: "Arron",
        sex: "male",
        age: 7,
      },
      {
        name: "Bernard",
        sex: "male",
        age: 6,
      },
    ],
  },
];

//а. испечатете ги имињата на животните кои имаат популарност поголема од 4
console.log("----a-----");
let animalPopoularityHigherThanFour = zooAnimals
  .filter((animal) => animal.popularity > 4)
  .forEach((animal) => console.log(animal.name));

//б. отпечатете го името на најстариот слон
console.log("----b-----");
let oldestElephant = zooAnimals
  .find(({ name }) => name === "elephants")
  .residents.sort((x, y) => y.age - x.age)[0].name;

console.log(oldestElephant);

// в. испечатете ги сите имиња на пингвини кои се помали од 10 години и се женки
console.log("----v-----");
let penguinsNamesYoungerThanTen = zooAnimals
  .find(({ name }) => name === "penguins")
  .residents.filter(
    (resident) => resident.age < 10 && resident.sex === "female"
  )
  .forEach(({ name }) => console.log(name));

// г. најдете ја групата животни чие име има најмногу букви и потоа испечатете го збирот на возраста на жителите
//г-1
console.log("----g-1----");
let longestAnimalGroupName = zooAnimals.reduce(
  (first, curr) => (curr.name.length > first.name.length ? curr : first),
  zooAnimals[0]
);
console.log(longestAnimalGroupName);

//г-2
console.log("-----g-2------");
let sumOfAgeOfElephants = longestAnimalGroupName.residents
  .map((resident) => {
    return resident.age;
  })
  .reduce((acc, curr) => acc + curr, 0);

console.log(sumOfAgeOfElephants);

// д. најдете која група на животни има најмал број жители и најголем број жители, потоа направете нова низа која ги содржи сите имиња на жителите
//д-1
console.log("----d-1-----");
let smallestResidentsGroup = zooAnimals[0];
let biggestResidentsGroup = zooAnimals[0];

zooAnimals.forEach((animal) => {
  if (animal.residents.length < smallestResidentsGroup.residents.length) {
    smallestResidentsGroup = animal;
  }
  if (animal.residents.length > biggestResidentsGroup.residents.length) {
    biggestResidentsGroup = animal;
  }
});

console.log(
  `Group with biggest number of residents: ${biggestResidentsGroup.name}`
);
console.log(
  `Group with smallest number of residents: ${smallestResidentsGroup.name}`
);

//д-2
console.log("----d-2-----");

let allResidentsNames = [];

zooAnimals.forEach((animal) => {
  animal.residents.forEach((resident) => {
    allResidentsNames.push(resident.name);
  });
});
console.log("All Groups Resident Names:", allResidentsNames);
