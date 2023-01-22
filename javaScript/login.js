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
  alert("Account created successfully!");
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
      return;
    }
  });

  if (loggedin_flag === true) {
    localStorage.setItem("loggedin", JSON.stringify(enteredEmail.value));

    location.href = "index.html";
  } else {
    localStorage.setItem("loggedin", JSON.stringify(loggedin_flag));
    alert("Please enter correct credential");
  }
});

////// Forgot password

let forgot = document.querySelector("#forgot");

forgot.addEventListener("click", () => {
  alert("OTP sent to your email and mobile to reset password");
});
