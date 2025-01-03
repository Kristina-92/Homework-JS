//Task 4

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        age: 30,
        email: "john@example.com",
      });
    }, 2000);
  });
}

async function displayUserDetails() {
  try {
    const user = await fetchData();
    console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`);
  } catch (error) {
    console.log("Error:", error);
  }
}

displayUserDetails();
