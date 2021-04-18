const spaceQuestions = [
    {
        question: 'How many planets are in our solar system, and which one is the last?',
        answers: [
            { text: '8 planets, Neptune', correct: true },
            { text: '8 planets, Pluto', correct: false },
            { text: '4 planets, Earth', correct: false },
            { text: '9 planets, Pluto', correct: false },
        ],
    },
    {
        question: 'Which one is the biggest planet mentioned here?',
        answers: [
            { text: 'Pluto', correct: false },
            { text: 'Earth', correct: true },
            { text: 'Mercury', correct: false },
            { text: 'Mars', correct: false },
        ],
    },
    {
        question: 'Which man made object has travel the further?',
        answers: [
            { text: 'Voyager 2, 1977', correct: false },
            { text: 'Hubble, 1990', correct: false },
            { text: 'Voyager 1, 1977', correct: true },
            { text: 'James Webb, 2021', correct: false },
        ],
    },
    {
        question: 'Which planet in our solar system has the strongest gravity?',
        answers: [
            { text: 'Jupiter, 27.68 m/s²', correct: false },
            { text: 'Neptune, 11.15 m/s²', correct: false },
            { text: 'Jupiter, 24.79 m/s²', correct: true },
            { text: 'Pluto, 35.76 m/s²', correct: false },
        ],
    },
    {
        question: 'Which planet is the coldest?',
        answers: [
            { text: 'Pluto', correct: false },
            { text: 'Neptune', correct: true },
            { text: 'Earth', correct: false },
            { text: 'Saturn', correct: false },
        ],
    },
    {
        question: 'What is equivalent to 1 AU in kilometers?',
        answers: [
            { text: '154,147,200.8 km', correct: false },
            { text: '149,597,870.7 km', correct: true },
            { text: '14,959,787,070,000 cm', correct: false },
            { text: '149,597,870,700 m', correct: false },
        ],
    },
];

const codingQuestions = [
    {
        question: 'Which was the first name of JavaScript?',
        answers: [
            { text: 'MS-DOS', correct: false },
            { text: 'Mocha', correct: true },
            { text: 'Linux', correct: false },
            { text: 'Java', correct: false },
        ],
    },
    {
        question: 'Who developed the first web browser? (even though if it was not popular)',
        answers: [
            { text: 'Bill Gates', correct: false },
            { text: 'Elon Musk', correct: false },
            { text: 'Tim Cook', correct: false },
            { text: 'Tim Berners-Lee', correct: true },
        ],
    },
    {
        question: 'In which year JSON was created?',
        answers: [
            { text: '1995', correct: false },
            { text: '2001', correct: false },
            { text: '2003', correct: true },
            { text: '2015', correct: false },
        ],
    },
    {
        question: 'In which year jquery made it is first appearance?',
        answers: [
            { text: '2006', correct: true },
            { text: '2000', correct: false },
            { text: '2010', correct: false },
            { text: '2020', correct: false },
        ],
    },
    {
        question: 'In which year NodeJS was introduced and by who?',
        answers: [
            { text: 'in may 2009, by Ryan Dahl', correct: true },
            { text: 'in may 2010, by Rayn Dehl', correct: false },
            { text: 'in may 2000, by Steve Wozniak', correct: false },
            { text: 'in may 2001, by Jeff Bezos', correct: false },
        ],
    },
    {
        question: 'What "DOM" means?',
        answers: [
            { text: 'Dedicated Object Matrix', correct: false },
            { text: 'Dynamic Object Modal', correct: false },
            { text: 'Document Object Model', correct: true },
            { text: 'Design Oriented to Molds', correct: false },
        ],
    },
];

// function timer() {
//     let startingMinuts;
//     let time = startingMinuts * 60;

//     let counterId = setInterval(() => {
//         updateCountdown();
//     }, 1000);

//     function updateCountdown() {
//         const minutes = Math.floor(time / 60);
//         let seconds = time % 60;

//         seconds = seconds < 10 ? '0' + seconds : seconds;
//         counter.innerHTML = `Time: ${minutes}:${seconds}`;
//         time--;

//         if (time < 0) {
//             clearInterval(counterId);
//             //return 0;
//         }
//     }
// }
