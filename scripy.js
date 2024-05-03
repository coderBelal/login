const btn = document.getElementById("btn");
const email = document.getElementById("email");
const invalid = document.getElementById("invalid");
const password = document.getElementById("password");
const login = document.getElementById("login");
btn.addEventListener("click", function () {
  if (email.value == "") {
    invalid.style.display = "block";
  } else if (password.value == "") {
    invalid.style.display = "block";
  } else {
    login.style.display = "block";
    invalid.style.display = "none";
  }
});
