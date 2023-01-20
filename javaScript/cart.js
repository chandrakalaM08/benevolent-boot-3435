let myCar = {};

let myurl = document.URL;
let idNumber = myurl.split("=");

let ids = idNumber[1];


let url = "https://retoolapi.dev/iVR76d/data";

async function fetchmyCar() {
  try {
    let response = await fetch(`${url}/${ids}`);
    response = await response.json();
    displaymyCar(response);
    displaytotal(response);
    myCar = response;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

fetchmyCar();

let main = document.getElementById("left");
function displaymyCar(myCar) {
  let photo = document.getElementById("photo");
  photo.src = myCar.image;
}

let payButton = document.getElementById("paybutton");

payButton.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/payment.html";
});

function displaytotal(myCar) {
  let convinence = 99;
  let priceamaount = myCar.price;

  let totalcost = Number(priceamaount) + Number(convinence);
  console.log(totalcost);
  let total = document.getElementById("total");
  total.innerText = "Total Payable:" + totalcost;
}
