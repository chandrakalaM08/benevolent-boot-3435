let myCar = {};

let myurl = document.URL;
let idNumber = myurl.split("=");

let ids = idNumber[1];
console.log(ids);

let url = "https://retoolapi.dev/iVR76d/data";

async function fetchmyCar() {
  try {
    let response = await fetch(`${url}/${ids}`);
    response = await response.json();
    displaymyCar(response);
    myCar = response;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

fetchmyCar();

function displaymyCar(myCar) {
  let photo = document.getElementById("photo");
  photo.src = myCar.image;
}
