const category1 = document.getElementById("btnCatCoding");
const category2 = document.getElementById("btnCatSpace");
const category = document.getElementsByClassName("cat");
//let codingSelected, spaceSelected;

category1.addEventListener("click", (e) => {
  e.preventDefault();
  //codingSelected = true;
  selectedCategory();
});

category2.addEventListener("click", (e) => {
  e.preventDefault();
  //spaceSelected = true;
  selectedCategory();
});

const userName = document.getElementById("name");
const startButton = document.getElementById("btnComenzar");

startButton.addEventListener("click", (e) => {
  e.preventDefault();
  let name = userName.value;
  let checker1 = category1.classList.contains("selected-Cat");
  let checker2 = category2.classList.contains("selected-Cat");
  userInputsValidator(name, checker1, checker2);
});

function selectedCategory() {
  if (
    category1.classList.contains("selected-Cat") ||
    category2.classList.contains("selected-Cat")
  ) {
    category1.classList.remove("selected-Cat");
    category2.classList.remove("selected-Cat");
    //codingSelected = false;
    //spaceSelected = false;
  } else {
    if (!category1.classList.contains("selected-Cat")) {
      category1.classList.add("selected-Cat");
      //spaceSelected = false;
    } else if (!category2.classList.contains("selected-Cat")) {
      category2.classList.add("selected-Cat");
      //codingSelected = false;
    }
  }
}

//!str.trim().length
function userInputsValidator(str, check1, check2) {
  if ((!str.trim().length || !check1) && (!str.trim().length || !check2)) {
    alert("Please fill the input and select a category!");
  } else {
    userRegistration();
  }
}

const registrationDiv = document.getElementById("registrationDiv");
const rulesDiv = document.getElementById("rulesDiv");
const body = document.getElementById("bg-body");

//this will be excecuted after the user enter his name and chooses a category.
function userRegistration() {
  registrationDiv.classList.add("hide");
  rulesDiv.classList.add("hide");
  body.classList.remove("body-index");
  body.classList.add("body-coding1Cat");
}
