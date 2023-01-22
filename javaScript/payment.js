let redirectFlag = JSON.parse(localStorage.getItem("loggedin"));

if (redirectFlag === false) {
  window.location.href = "login.html";
}

let billamount = localStorage.getItem("totalbill");
let headingtext = document.querySelector("#headingin");
headingtext.textContent = `₹${billamount}`;

let payUPI = document.getElementById("payviaupi");

let payCard = document.getElementById("payviacard");

let payWallet = document.getElementById("payviawallet");

let payNet = document.getElementById("payvianet");

let makePayment = document.getElementById("upi");

let ppbutton = document.getElementById("ppbtn");
ppbutton.addEventListener("click", () => {
  location.href = "status.html";
});

payCard.addEventListener("click", () => {
  ppbutton.innerHTML = "";
  ppbutton.style.backgroundColor = "white";
  displayCard();
});

function displayCard() {
  makePayment.innerHTML = "";

  let formel = document.createElement("form");
  formel.className = "myform";
  formel.setAttribute("action", "/status.html");

  let h3 = document.createElement("h3");
  h3.innerText = "Enter Card details";

  let cardnum = document.createElement("input");
  cardnum.setAttribute("type", "number");
  cardnum.setAttribute("value", "Card Number");
  cardnum.setAttribute("placeholder", "Card Number");
  cardnum.setAttribute("required", "");

  let exp = document.createElement("input");
  exp.setAttribute("type", "text");
  // exp.setAttribute("value", "date");
  exp.setAttribute("placeholder", "Expiry (MM/YY)");
  exp.setAttribute("required", "");

  let cvv = document.createElement("input");
  cvv.setAttribute("type", "number");
  cvv.setAttribute("value", "cvv");
  cvv.setAttribute("placeholder", "CVV");
  cvv.setAttribute("required", "");

  // let div1 = document.createElement("div");

  let condition = document.createElement("input");
  condition.setAttribute("type", "checkbox");

  let text = document.createElement("p");
  text.textContent = "Securely save card details";

  // div1.append(condition, text);

  // let div2 = document.createElement("div");
  let pay = document.createElement("button");
  pay.setAttribute("type", "submit");
  pay.className = "pbutton";
  pay.textContent = "PAY" + "  " + `₹${billamount}`;

  // pay.addEventListener("click", () => {
  //   location.href = "http://127.0.0.1:5500/status.html";
  // });

  formel.append(cardnum, exp, cvv, condition, text, pay);
  // div2.append(pay);

  makePayment.append(h3, formel);
}

payWallet.addEventListener("click", () => {
  ppbutton.innerHTML = "";
  ppbutton.style.backgroundColor = "white";
  displayWallet();
});

function displayWallet() {
  makePayment.innerHTML = "";

  let h3 = document.createElement("h3");
  h3.innerText = "Mobile Wallet";

  let div1 = document.createElement("div");

  let image = document.createElement("img");
  image.src =
    "https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070";

  let text = document.createElement("p");
  text.textContent = "Paytm Wallet";

  div1.append(image, text);

  let div2 = document.createElement("div");
  let pay = document.createElement("button");
  pay.className = "pbutton";
  pay.textContent = "PAY" + "  " + `₹${billamount}`;

  pay.addEventListener("click", () => {
    location.href = "http://127.0.0.1:5500/status.html";
  });

  div2.append(pay);

  makePayment.append(h3, div1, div2);
}
