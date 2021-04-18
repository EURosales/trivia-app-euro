const userName = document.getElementById('name');
const startButton = document.getElementById('btnComenzar');
const questionElement = document.getElementById('question');
const anwserButtons = document.getElementById('answer-buttons');
const num_ind = document.getElementById('numeric-ind');
let name;
let score = 0;

/*Timer function - condition it's added later*/
const counter = document.getElementById('timer');
let startingMinuts = 3;
let time = startingMinuts * 60;
let counterId;

function timer() {
    counterId = setInterval(() => {
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
            alert(`Time's over!`);
            gameOver();
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

function categoryLoader(categoryValue) {
    if (categoryValue == 1) {
        startCoding();
    } else if (categoryValue == 2) {
        startSpace();
    }
}

//Load questions from the category selected
const mainRegistrationDiv = document.getElementById('mainRegistrationDiv');
const registrationDiv = document.getElementById('registrationDiv');
const genContainer = document.getElementById('gen-container');
const body = document.getElementById('bg-body');
const test = document.getElementsByClassName('content');
const h1 = document.getElementsByClassName('name');
const questionScreen = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex;

function start() {
    mainRegistrationDiv.classList.add('hide');
    registrationDiv.classList.add('hide');
    rulesDiv.classList.add('hide');
    body.classList.remove('body-index');
    //Se ocultan los primeros DIV's, lo que contienen la parte de registro.
    genContainer.classList.remove('hide');
    //SpaceScreen tiene que ser cambiado por un nombre que represente las dos categorias
    questionScreen.classList.remove('hide');
    categoryLoader(isSelected());
}

const controller = document.getElementById('controller');
const scoreCounter = document.getElementById('score');
const indicators = document.getElementById('indicators');
const place = document.getElementById('place-indicator');

controller.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startCoding() {
    //console.log('The space category function was reached.');
    //Se cambia la imagen de fondo
    body.classList.add('body-coding');

    //Reordena las preguntas en diferente orden
    shuffledQuestions = codingQuestions.sort(() => Math.random() - 0.5);
    //Aqui se estable que comience por la posicion 0 del array que contiene las preguntas
    currentQuestionIndex = 0;
    //Una vez el orden de las preguntas esta sorteado, se comienzan a cargar en el div.
    setNextQuestion();
    //A la vez que inicia el div, se comienza a contar el tiempo.
    timer();
}

function startSpace() {
    //console.log('The space category function was reached.');
    //Se cambia la imagen de fondo
    body.classList.add('body-space');

    //Reordena las preguntas en diferente orden
    shuffledQuestions = spaceQuestions.sort(() => Math.random() - 0.5);

    //Aqui se estable que comience por la posicion 0 del array que contiene las preguntas
    currentQuestionIndex = 0;
    //Una vez el orden de las preguntas esta sorteado, se comienzan a cargar en el div.
    setNextQuestion();
    //A la vez que inicia el div, se comienza a contar el tiempo.
    timer();
}

function setNextQuestion() {
    //Siempre antes de cargar la siguiente pregunta y respuestas, se limpian todas las alertas visuales que hayan surgido debido al reesultado de la respuesta anterior.
    resetState();
    //Se accesa a la siguiente pregunta con sus respuestas.
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    scoreCounter.innerHTML = `Score: ${score}`;
    place.innerHTML = `Question ${currentQuestionIndex + 1} out of ${shuffledQuestions.length}`;
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

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    scoreCalc(correct);
    setStatusClass(questionScreen, correct);
    Array.from(anwserButtons.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    //controller.classList.remove('hide');
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        controller.classList.remove('hide');
    } else {
        gameOver();
        clearInterval(counterId);
    }
}

function scoreCalc(correct) {
    if (correct) {
        score += 20;
    } else {
        score -= 5;
        if (score < 0) {
            score = 0;
        }
    }
}

function resetState() {
    controller.classList.add('hide');
    clearStatusClass(questionScreen);
    while (anwserButtons.firstChild) {
        anwserButtons.removeChild(anwserButtons.firstChild);
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    element.disabled = true;
    if (correct) {
        element.classList.add('correct-answer');
    } else {
        element.classList.add('wrong-answer');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct-answer');
    element.classList.remove('wrong-answer');
    element.disabled = false;
}

const resultsDiv = document.getElementById('resultsDiv');
const results = document.getElementById('results');

function triviaResults() {
    place.innerText = 'Game Over';
    `Score: ${score}`;
    results.innerHTML = `Hello ${name}! your score was ${score}!`;
}

function gameOver() {
    resultsDiv.classList.remove('hide');
    questionElement.classList.add('hide');
    anwserButtons.classList.add('hide');
    num_ind.classList.add('hide');
    scoreCounter.classList.add('hide');
    counter.classList.add('hide');
    resetState();
    triviaResults();
}
