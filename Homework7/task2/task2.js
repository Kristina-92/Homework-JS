function checkUserInputs() {
  //   event.preventDefault();

  const userInputs = document.querySelectorAll("input");
  const name = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const pass = document.getElementById("password");
  const confirmPass = document.getElementById("confirm-password");
  //   console.log(userInputs);

  for (let input of userInputs) {
    if (input.value == "") {
      alert("All fields must be filled");
      return;
    }
  }
  if (pass.value !== confirmPass.value) {
    alert("Passwords do not match. Please try again.");
    return;
  } else {
    alert(
      `Registration was successfull! Welcome ${name.value} ${lastName.value}! Your registration email is: ${email.value}`
    );
    document.getElementById("form-container").reset();
  }
}

const registerBtn = document.getElementById("register-btn");
registerBtn.addEventListener("click", checkUserInputs);
