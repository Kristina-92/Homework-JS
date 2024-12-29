//Task 2

//a
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
  },
  hobbies: ["Reading", "Traveling", "Cooking"],
};

let additionalInfo = {
  email: "john.doe@gmail.com",
  phone: "075458952",
  education: {
    degree: "Master",
    major: "Mathematics",
  },
};

let fullPersonInfo = { ...person, ...additionalInfo };
console.log(fullPersonInfo);

//b
let user = {
  id: 123,
  username: "jsmith",
  fullName: { firstName: "John", lastName: "Smith" },
  contact: { email: "john@example.com", phone: "555-555-5555" },
  addresses: [
    {
      type: "home",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    {
      type: "work",
      street: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
  ],
};

const displayUserSummary = ({
  username,
  fullName: { firstName, lastName },
  contact: { email },
  addresses: [
    { street: homeStreet, city: homeCity, state: homeState, zip: homeZip },
    { street: workStreet, city: workCity, state: workState, zip: workZip },
  ],
}) => {
  console.log("User username:", username),
    console.log("User fullname:", firstName, lastName),
    console.log("User email contact:", email);
  console.log("User home address:", homeStreet, homeCity, homeState, homeZip);
  console.log("User work address:", workStreet, workCity, workState, workZip);
};

displayUserSummary(user);
