let container = document.getElementById("container");

let sortfilterDiv = document.getElementById("sortfilter");

/////////////////////////////////////////////////////////

let products = document.querySelector(".cars");

const url = "https://retoolapi.dev/iVR76d/data";

async function fetchCars() {
  try {
    let result = await fetch(url);
    result = await result.json();
    displayCars(result);
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

    let image = document.createElement("img");
    image.src = element.image;

    let rating = document.createElement("h4");
    rating.innerText = ` ⭐ ${element.rating}`;

    let name = document.createElement("h3");
    name.textContent = element.product + " " + element.model;

    let fuelandseat = document.createElement("p");
    fuelandseat.textContent =
      element.fuel + " : " + element.seats + " " + "Seats";

    let price = document.createElement("h3");
    price.textContent = `₹${element.price}` + "    " + "₹̶ ̶̶̶4̶̶̶5̶̶̶0̶̶̶0̶̶̶ ";

    card.append(image, rating, name, fuelandseat, price);
    products.append(card);
    container.append(products);
  });
}
