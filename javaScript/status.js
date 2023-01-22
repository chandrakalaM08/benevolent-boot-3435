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

let showStatus = null;
function myFunction() {
  showStatus = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("paymentstatus").style.display = "block";
}
