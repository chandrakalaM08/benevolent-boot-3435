let redirectFlag = JSON.parse(localStorage.getItem("loggedin"));

if (redirectFlag === false) {
  window.location.href = "login.html";
}

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
    displaytotal(response, 0, 0);
    myCar = response;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

fetchmyCar();

let main = document.getElementById("left");
let detailsdiv = document.getElementById("detailsof");
function displaymyCar(myCar) {
  let photo = document.getElementById("photo");
  photo.src = myCar.image;

  let name = document.createElement("h3");
  name.innerText = myCar.product + " " + myCar.model + " " + myCar.fuel;

  let firstdiv = document.createElement("div");

  let one = document.createElement("div");
  one.append(name);

  let user = document.createElement("h5");
  user.innerText =
    "👤 " + "Jerry Gaberial" + " " + ": " + "CarGo Host since Feb'20";

  let two = document.createElement("div");
  two.append(user);

  firstdiv.append(one, two);

  let seconddiv = document.createElement("div");
  let thiscar = document.createElement("h5");
  thiscar.innerText = "⭐" + myCar.rating + " • " + "(30,548 kms driven)";

  seconddiv.append(thiscar);

  detailsdiv.append(firstdiv, seconddiv);
}

let payButton = document.getElementById("paybutton");

payButton.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/payment.html";
});

let insurance = 0;
let radioA = document.getElementById("money1");
radioA.addEventListener("click", () => {
  displaytotal(myCar, radioA.value, 0);
  insurance = +radioA.value;
});

let radioB = document.getElementById("money2");
radioB.addEventListener("click", () => {
  displaytotal(myCar, radioB.value, 0);
  insurance = +radioB.value;
});

let radioC = document.getElementById("money3");
radioC.addEventListener("click", () => {
  displaytotal(myCar, radioC.value, 0);
  insurance = +radioC.value;
});

function displaytotal(myCar, val, discount) {
  let convinence = 99;
  let priceamaount = myCar.price;

  let totalcost =
    Number(priceamaount) + Number(convinence) + Number(val) - Number(discount);

  let total = document.getElementById("total");
  total.innerText = "Total Payable:" + totalcost;
  localStorage.setItem("totalbill", JSON.stringify(totalcost));
}

let applyCoupon = document.getElementById("applybtn");
let alertmsg = document.getElementById("msg");
let discount = document.getElementById("discount");
applyCoupon.addEventListener("click", () => {
  if (discount.value === "") {
    alertmsg.innerText = "Please enter a discount coupon";
  } else if (discount.value !== "CARGO200" && discount.value !== "CARGONEW") {
    alertmsg.innerText = "Not a valid coupon";
  } else if (discount.value === "CARGO200" || discount.value === "CARGONEW") {
    displaytotal(myCar, insurance, 200);
    alertmsg.innerText = "Coupan Applied!";
  }
});
