function slideshowFun(images) {}

var Images = [
  "https://zoomcar-assets.zoomcar.com/photographs/original/b497831a85f05c2be2651b090f0d5e4c7d2228e8.png?1663873468",
  "https://zoomcar-assets.zoomcar.com/photographs/original/a49559a67ba1d5fd7e2ffea2f78f654691ee018e.png?1663874345",
  "https://zoomcar-assets.zoomcar.com/photographs/original/58357adbcf8c71bfa462bd02c3e2678cd0c722e7.png?1663874336",
  "https://zoomcar-assets.zoomcar.com/photographs/original/1d4eec40ac6402ff63d5e25fcc2e10c6759b1fc8.png?1663871681",
  "https://zoomcar-assets.zoomcar.com/photographs/original/a21d2ba781794d6c3f3e310c6a70b3d7c39cac89.png?1663876143",
  "https://zoomcar-assets.zoomcar.com/photographs/original/b497831a85f05c2be2651b090f0d5e4c7d2228e8.png?1663873468",
  "https://zoomcar-assets.zoomcar.com/photographs/original/58357adbcf8c71bfa462bd02c3e2678cd0c722e7.png?1663874336",
];

var names = [
  "Ford	Escape",
  "Lotus	Evora",
  "Ford	Fiesta",
  "Toyota	Tacoma",
  "Jeep	Liberty",
  "Dodge	Caliber",
  "BMW	Z4",
];

var ratings = [4.5, 4.2, 4.7, 4.3, 4.5, 4.3, 4.3];

let imageTag = document.createElement("img");
imageTag.setAttribute("src", Images[0]);

let nameCar = document.createElement("h2");
nameCar.textContent = names[0];

let carrating = document.createElement("h3");
carrating.textContent = ratings[0];

let divdetail = document.createElement("div");

divdetail.append(nameCar, carrating);

let slideshowElement = document.getElementById("slideshow");
slideshowElement.append(divdetail, imageTag);

let i = 1;
window.addEventListener("load", function () {
  this.setInterval(() => {
    if (i === Images.length) {
      i = 0;
    }

    imageTag.setAttribute("src", Images[i]);
    nameCar.textContent = names[i];

    carrating.textContent = "Top Rated Cars" + " " + `⭐${ratings[i]}`;

    divdetail.append(nameCar, carrating);

    slideshowElement.append(divdetail, imageTag);
    i++;
  }, 2500);
});

let round = document.getElementById("one3");

round.addEventListener("mouseover", () => {
  round.style.backgroundColor = "lightgreen";
});

round.addEventListener("mouseout", () => {
  round.style.backgroundColor = "lightgrey";
});

let roundairport = document.getElementById("two3");

roundairport.addEventListener("mouseover", () => {
  roundairport.style.backgroundColor = "lightgreen";
});

roundairport.addEventListener("mouseout", () => {
  roundairport.style.backgroundColor = "lightgrey";
});

////FIND CARS

// let find = document.getElementById("find");
// find.addEventListener("click", (event) => {
//   event.preventDefault();
//   location.href = "product.html";
// });
