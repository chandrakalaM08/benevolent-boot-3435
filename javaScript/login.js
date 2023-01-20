let signupForm = document.getElementById("signupForm");

let signup = document.querySelector(".signupbutton");

let userData = JSON.parse(localStorage.getItem("users")) || [];

let firstname = document.getElementById("first");
let lastname = document.getElementById("last");
let mail = document.getElementById("email");
let number = document.getElementById("phone");
let password = document.getElementById("pass");
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let userObj = {
    first: firstname.value,
    last: lastname.value,
    mailid: mail.value,
    phone: number.value,
    password: password.value,
  };

  userData.push(userObj);

  localStorage.setItem("users", JSON.stringify(userData));
});

///////// writing code for login here

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let userData = JSON.parse(localStorage.getItem("users")) || [];

  let enteredPass = document.querySelector("#enterpass");
  let enteredEmail = document.querySelector("#enteremail");

  let loggedin_flag = false;
  userData.forEach((element) => {
    if (
      enteredEmail.value === element.mailid &&
      enteredPass.value === element.password
    ) {
      loggedin_flag = true;
      location.href = "http://127.0.0.1:5500/cartproduct.html";
      return;
    } else if (
      enteredEmail.value !== element.mailid &&
      enteredPass.value !== element.password
    ) {
      alert("Please enter correct credential");
    }
  });
});

////// Forgot password

let forgot = document.querySelector("#forgot");

forgot.addEventListener("click", () => {
  alert("OTP sent to your email and mobile to reset password");
});
