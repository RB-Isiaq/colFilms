const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");
const userName = document.querySelector("#user");
const fullName = document.querySelector("#full_name");
const email = document.querySelector("#email");
const register = document.getElementById("register");
const login = document.getElementById("login");

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});

function displayInputs(e) {
  //   e.preventDefault();

  const user = {
    userName: userName.value,
    fullName: fullName.value,
    password: password.value,
    email: email.value,
  };

  localStorage.setItem("userAccount", JSON.stringify(user));

  register.action = "./loginPage.html";
}

register.addEventListener("submit", displayInputs);
