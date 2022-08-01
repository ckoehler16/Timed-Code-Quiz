// Stores the answer choices in an array
var timerEl = document.getElementById('countdown');
var timeLeft = 60;
var timerInterval;
var choices = [];

var answerA = document.getElementById('a');
var answerB = document.getElementById('b');
var answerC = document.getElementById('c');
var answerD = document.getElementById('d');
var startQuiz = document.getElementById('start-quiz');
var quizDirections = document.getElementById('start');
var scoreName = document.querySelector('#name-form');
var submitName = document.querySelector('#save-name');


// Timer function that counts down from 60 seconds
function countdown() {

    // setInterval function to run the timer function every 1000 milliseconds
    timerInterval = setInterval(function () {
        // timeLeft is greater than 1
        if (timeLeft > 1) {
            // textContent is used to display the time left in the timer element
            timerEl.textContent = timeLeft + ' seconds remaining';
            // timeLeft is decremented by 1
            timeLeft--;
        }
        else if (timeLeft === 1) {
            // If the timeLeft = 1, the textContent must say 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            // timeLeft is decremented by 1
            timeLeft--;
        }
        else {
            // If the timeLeft is 0, the timer must stop and the quiz must be ended
            timerEl.textContent = 'Time is up!';
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Functions that display the quiz questions

// Make first question appear
function questionOne() {
    startQuiz.style.display = 'none';
    question1.style.display = 'block';
    quizDirections.style.display = 'none';
}

// When wrong answer is clicked time is subtracted from the timeLeft variable
function wrongAnswer1() {
    timeLeft = timeLeft - 5;
    questionTwo();
}
// When correct answer is clicked time is added to the timeLeft variable
function rightAnswer1() {
    timeLeft = timeLeft + 7;
    questionTwo();
}

// Hides first question and displays second question
function questionTwo() {
    question1.style.display = 'none';
    question2.style.display = 'block';
}

function wrongAnswer2() {
    timeLeft = timeLeft - 5;
    questionThree();
}

function rightAnswer2() {
    timeLeft = timeLeft + 7;
    questionThree();
}

// Hides second question and displays third question
function questionThree() {
    question2.style.display = 'none';
    question3.style.display = 'block';
}

function wrongAnswer3() {
    timeLeft = timeLeft - 5;
    questionFour();
}

function rightAnswer3() {
    timeLeft = timeLeft + 7;
    questionFour();
}

// Hides third question and displays fourth question
function questionFour() {
    question3.style.display = 'none';
    question4.style.display = 'block';
}

function wrongAnswer4() {
    timeLeft = timeLeft - 5;
    questionFive();
}

function rightAnswer4() {
    timeLeft = timeLeft + 7;
    questionFive();
}

// Hides fourth question and displays fifth question
function questionFive() {
    question4.style.display = 'none';
    question5.style.display = 'block';
}

function wrongAnswer5() {
    timeLeft = timeLeft - 5;
    finalScore();
}

function rightAnswer5() {
    timeLeft = timeLeft + 7;
    finalScore();
}

// Hide all questions, display name form and submit button, stops the timer
function finalScore() {
    timerEl.style.display = 'none';
    question1.style.display = 'none';
    question2.style.display = 'none';
    question3.style.display = 'none';
    question4.style.display = 'none';
    question5.style.display = 'none';
    scoreName.style.display = 'block';
    submitName.style.display = 'block';
    clearInterval(timerInterval);
    loadScores();
}
