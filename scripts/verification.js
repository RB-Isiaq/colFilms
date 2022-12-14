const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");
const userName = document.querySelector("#user");
const fullName = document.querySelector("#full_name");
const email = document.querySelector("#email");
const register = document.getElementById("register");
const login = document.getElementById("login");
const errorDisplay = document.getElementById("dispaly_error");

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});

function verify(e) {
  const data = JSON.parse(localStorage.getItem("userAccount"));

  const verificationData = {
    username: data.userName,
    password: data.password,
  };
  if (
    userName.value === verificationData.username &&
    password.value === verificationData.password
  ) {
    console.log(login.action);
    login.action = "./verificationPage.html";
  } else {
    e.preventDefault();
    errorDisplay.textContent = "Please input your details correctly";
  }
}

login.addEventListener("submit", verify);
