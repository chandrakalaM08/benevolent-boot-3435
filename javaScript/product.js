function checkLogin() {}

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
    link.href = "/cartproduct.html?id=" + element.id;

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
  mydata.sort(function (a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
  });
  displayCars(mydata);
});

let sorth2l = document.getElementById("h2l");

sorth2l.addEventListener("click", () => {
  mydata.sort(function (b, a) {
    return parseFloat(a.price) - parseFloat(b.price);
  });
  displayCars(mydata);
});

let sortrating = document.getElementById("bestrated");

sortrating.addEventListener("click", () => {
  mydata.sort(function (b, a) {
    return parseFloat(a.rating) - parseFloat(b.rating);
  });
  displayCars(mydata);
});

let sortage = document.getElementById("age");

sortage.addEventListener("click", () => {
  mydata.sort(function (b, a) {
    return parseFloat(a.year) - parseFloat(b.year);
  });
  displayCars(mydata);
});

let sortpopular = document.getElementById("popular");

sortpopular.addEventListener("click", () => {
  mydata.sort(function (b, a) {
    return parseFloat(a.rating) - parseFloat(b.rating);
  });
  displayCars(mydata);
});

let sortKM = document.getElementById("km");

sortKM.addEventListener("click", () => {
  mydata.sort(function (a, b) {
    return parseFloat(a.km) - parseFloat(b.km);
  });
  displayCars(mydata);
});

////// Filter //////

let filter5 = document.getElementById("seat5");

filter5.addEventListener("click", () => {
  let newdata = mydata.filter(function (element, ind) {
    if (element.seats === "5") {
      return true;
    }
  });
  displayCars(newdata);
});

let filter4 = document.getElementById("seat4");

filter4.addEventListener("click", () => {
  let newdata = mydata.filter(function (element, ind) {
    if (element.seats === "4") {
      return true;
    }
  });
  displayCars(newdata);
});

let filter7 = document.getElementById("seat7");

filter7.addEventListener("click", () => {
  let newdata = mydata.filter(function (element, ind) {
    if (element.seats === "7") {
      return true;
    }
  });
  displayCars(newdata);
});

//// Filter by fuel

let petrol = document.getElementById("petrol");

petrol.addEventListener("click", () => {
  let newdata = mydata.filter(function (element, ind) {
    if (element.fuel === "Petrol") {
      return true;
    }
  });
  displayCars(newdata);
});

let dis = document.getElementById("dis");

dis.addEventListener("click", () => {
  let newdata = mydata.filter(function (element, ind) {
    if (element.fuel === "Diesel") {
      return true;
    }
  });
  displayCars(newdata);
});

let CNG = document.getElementById("cng");

CNG.addEventListener("click", () => {
  let newdata = mydata.filter(function (element, ind) {
    if (element.fuel === "CNG") {
      return true;
    }
  });
  displayCars(newdata);
});

let electric = document.getElementById("electric");

electric.addEventListener("click", () => {
  let newdata = mydata.filter(function (element, ind) {
    if (element.fuel === "Electric") {
      return true;
    }
  });
  displayCars(newdata);
});

//// Filter by rating

let rating345 = document.getElementById("3+");

rating345.addEventListener("click", () => {
  let newdata = mydata.filter(function (element, ind) {
    if (Number(element.rating) >= 3) {
      console.log("hello");
      return true;
    }
  });
  displayCars(newdata);
});

//////////RESET

let resetData = document.getElementById("reset");

resetData.addEventListener("click", () => {
  fetchCars();
});
