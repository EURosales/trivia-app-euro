const userName = document.getElementById('name');
const startButton = document.getElementById('btnComenzar');
const questionElement = document.getElementById('question');
const anwserButtons = document.getElementById('answer-buttons');
let name;

const counter = document.getElementById('timer');

function timer() {
    const startingMinuts = 0.1;
    let time = startingMinuts * 60;
    let counterId = setInterval(() => {
        updateCountdown();
    }, 1000);

    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        counter.innerHTML = `Time: ${minutes}:${seconds}`;
        time--;

        if (time < 0) {
            clearInterval(counterId);
            //return 0;
        }
    }
}

//Trigger validators and get info
startButton.addEventListener('click', (e) => {
    e.preventDefault();
    name = userName.value;
    userInputsValidator(name, isSelected());
});

//Validations before start
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

//Load questions from the category selected
const mainRegistrationDiv = document.getElementById('mainRegistrationDiv');
const registrationDiv = document.getElementById('registrationDiv');
const body = document.getElementById('bg-body');
const test = document.getElementsByClassName('content');
const h1 = document.getElementsByClassName('name');
let shuffledQuestions, currentQuestionIndex;

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

const genContainer = document.getElementById('gen-container');
const spaceScreen = document.getElementById('space-question-container');
const controller = document.getElementById('controller');

/*
anwserBTN.forEach(mish);
function mish(element) {
    element.addEventListener('click', (e) => {
        controller.classList.remove('hide');
    });
}
*/

function startCoding() {
    body.classList.add('body-coding');
}

function startSpace() {
    //console.log('The space category function was reached.');
    //Se cambia la imagen de fondo
    body.classList.add('body-space');
    //Se ocultan los primeros DIV's, lo que contienen la parte de registro.
    genContainer.classList.remove('hide');
    spaceScreen.classList.remove('hide');
    //Reordena las preguntas en diferente orden
    shuffledQuestions = spaceQuestions.sort(() => Math.random() - 0.5);
    //Aqui se estable que comience por la posicion 0 del array que contiene las preguntas
    currentQuestionIndex = 0;
    //Una vez el orden de las preguntas esta sorteado, se comienzan a cargar en el div.
    console.log(name);
    setNextSpaceQuestion();
}

function setNextSpaceQuestion() {
    timer();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    /*Al h1 que contiene la pregunta, se le asigna la pregunta que este en la
    posicion 0 despues de reordenar el arreglo que ccontiene las preguntas*/
    //el primer "question es el parametro de la función en la que estamos actualmente."
    //El segundo "question" es el nombre de la "Key" del diccionario que contiene la pregunta.
    questionElement.innerText = question.question;
    //Answers
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        anwserButtons.appendChild(button);
    });
}

function selectAnswer(e) {}
