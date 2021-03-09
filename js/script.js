const category = document.getElementsByClassName("cat");
const userName = document.getElementById("name");
const startButton = document.getElementById("btnComenzar");
let selectedCategory;

startButton.addEventListener("click", (e) => {
  e.preventDefault();
  let name = userName.value;
  userInputsValidator(name, isSelected());
});

function isSelected() {
  rating = document.forms["cato"]["cat"].value;
  if (rating > 0) {
    return true;
  } else {
    return false;
  }
}

function userInputsValidator(str, fun) {
  if (!str.trim().length || !fun) {
    alert("Please fill the input and select a category!");
  } else {
    userRegistration();
  }
}

const registrationDiv = document.getElementById("registrationDiv");
const rulesDiv = document.getElementById("rulesDiv");
const body = document.getElementById("bg-body");
const test = document.getElementsByClassName("content");
const h1 = document.getElementsByClassName("name");

//this will be excecuted after the user enter his name and chooses a category.
function userRegistration() {
  registrationDiv.classList.add("hide");
  rulesDiv.classList.add("hide");
  body.classList.remove("body-index");
  body.classList.add("body-coding1Cat");
}
