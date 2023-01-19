let showStatus = null;
function myFunction() {
  showStatus = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("paymentstatus").style.display = "block";
}
