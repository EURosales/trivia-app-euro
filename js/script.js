const userName = document.getElementById("name");
const startButton = document.getElementById("btnComenzar");

startButton.addEventListener("click", (e) => {
  e.preventDefault();
  let name = userName.value;
  userInputsValidator(name, isSelected());
});

function isSelected() {
  rating = document.forms["cato"]["cat"].value;
  if (rating > 0) {
    //console.log(rating);
    return true, rating;
  } else {
    return false;
  }
}

function userInputsValidator(str, isSelected) {
  if (!str.trim().length || !isSelected) {
    alert("Please fill the input and select a category!");
  } else {
    start();
  }
}

const registrationDiv = document.getElementById("registrationDiv");
const rulesDiv = document.getElementById("rulesDiv");
const body = document.getElementById("bg-body");
const test = document.getElementsByClassName("content");
const h1 = document.getElementsByClassName("name");

function start() {
  registrationDiv.classList.add("hide");
  rulesDiv.classList.add("hide");
  body.classList.remove("body-index");
  categoryLoader(isSelected());
}

function categoryLoader(categoryValue) {
  if (categoryValue == 1) {
    //la categoria 1 es PROGRAMACION
    console.log("Salio 1 - programación");
    startCoding();
  } else if (categoryValue == 2) {
    //la categoria 2 es ESPACIO
    console.log("Salio 2 - espacio");
    startSpace();
  }
}

function startCoding() {
  body.classList.add("body-coding");
}

function startSpace() {
  body.classList.add("body-space");
}
