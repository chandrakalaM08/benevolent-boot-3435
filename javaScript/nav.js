let flag = JSON.parse(localStorage.getItem("loggedin"));

console.log(flag);

if (flag === false) {
  window.location.href = "login.html";
}

let users = JSON.parse(localStorage.getItem("users"));

let user = document.getElementById("navname");
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
  flag = false;
  location.href = "login.html";
});
