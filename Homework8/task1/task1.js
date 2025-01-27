const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const usersContainer = document.getElementById("users-container");
  const userListTitle = document.createElement("h2");

  userListTitle.classList.add("user-list-title");
  userListTitle.textContent = "Users";
  usersContainer.appendChild(userListTitle);

  try {
    const response = await fetch(url);
    const userData = await response.json();
    userData.forEach((user) => {
      const userContainer = document.createElement("div");
      userContainer.classList.add("user-card");

      userContainer.innerHTML = `
      <h4 class="user-name">${user.name}</h4>
      <p>Phone Number: ${user.phone}</p>
      <p>Company: ${user.company.name}</p> `;

      usersContainer.appendChild(userContainer);
    });
  } catch (error) {
    console.error("Error occured!", error);
  }
};

getUsers();
