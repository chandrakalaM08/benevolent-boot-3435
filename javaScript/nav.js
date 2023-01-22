let flag = JSON.parse(localStorage.getItem("loggedin"));

let users = JSON.parse(localStorage.getItem("users"));

let user = document.getElementById("navname");
user.addEventListener("click", () => {
  if (user.innerText === "LogIn / SignUp") {
    location.href = "/login.html";
  }
});

users.forEach((element) => {
  if (flag === element.mailid) {
    user.textContent = element.first + " " + element.last;
  }
});

///// drop down

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

///// logout

let logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  localStorage.setItem("loggedin", JSON.stringify(false));
  location.href = "login.html";
});
