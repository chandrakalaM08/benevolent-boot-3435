let container = document.getElementById("container");

let sortfilterDiv = document.getElementById("sortfilter");

/////////////////////////////////////////////////////////

let products = document.querySelector(".cars");

const url = "https://retoolapi.dev/iVR76d/data";

let mydata = [];
async function fetchCars() {
  try {
    let result = await fetch(url);
    result = await result.json();
    displayCars(result);
    mydata = result;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchCars();

function displayCars(data) {
  products.textContent = "";
  data.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";

    let link = document.createElement("a");
    link.href = "http://127.0.0.1:5500/cartproduct.html?id=" + element.id;
    console.log("http://127.0.0.1:5500/cartproduct.html?id=`${element.id}`");
    link.className = "linking";

    let image = document.createElement("img");
    image.src = element.image;

    let cardIn1 = document.createElement("div");
    cardIn1.className = "cardin1";

    let cardIn2 = document.createElement("div");
    cardIn2.className = "cardin2";

    let rating = document.createElement("h4");
    rating.innerText = ` ⭐ ${element.rating}`;

    let name = document.createElement("h3");
    name.textContent = element.product + " " + element.model;

    let fuelandseat = document.createElement("p");
    fuelandseat.textContent =
      element.fuel + " : " + element.seats + " " + "Seats";

    let price = document.createElement("h3");
    price.textContent = `₹${element.price}` + "    " + "₹̶ ̶̶̶4̶̶̶5̶̶̶0̶̶̶0̶̶̶ ";

    cardIn1.append(image);
    cardIn2.append(rating, name, fuelandseat, price);
    card.append(cardIn1, cardIn2);
    link.append(card);
    products.append(link);
    container.append(products);
  });
}

/////// Sort/////

let sortl2h = document.getElementById("l2h");

sortl2h.addEventListener("click", () => {
  console.log("working");
  mydata.price.sort(function (a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
  });
});


