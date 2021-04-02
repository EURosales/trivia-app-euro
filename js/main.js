const userName = document.getElementById('name');
const startButton = document.getElementById('btnComenzar');

startButton.addEventListener('click', (e) => {
    e.preventDefault();
    let name = userName.value;
    userInputsValidator(name, isSelected());
});

function isSelected() {
    rating = document.forms['cato']['radio'].value;
    if (rating > 0) {
        return true, rating;
    } else {
        return false;
    }
}

function userInputsValidator(str, isSelected) {
    if (!str.trim().length || !isSelected) {
        alert('Please fill the input and select a category!');
    } else {
        start();
    }
}

const mainRegistrationDiv = document.getElementById('mainRegistrationDiv');
const registrationDiv = document.getElementById('registrationDiv');
const body = document.getElementById('bg-body');
const test = document.getElementsByClassName('content');
const h1 = document.getElementsByClassName('name');

function start() {
    mainRegistrationDiv.classList.add('hide');
    registrationDiv.classList.add('hide');
    rulesDiv.classList.add('hide');
    body.classList.remove('body-index');
    categoryLoader(isSelected());
}

function categoryLoader(categoryValue) {
    if (categoryValue == 1) {
        startCoding();
    } else if (categoryValue == 2) {
        startSpace();
    }
}

function startCoding() {
    body.classList.add('body-coding');
}

function startSpace() {
    body.classList.add('body-space');
}
