var timerEl = document.getElementById('countdown');
var timeLeft = 60;
var timerInterval;
var leaderBoard = [];

var answerA = document.getElementById('a');
var answerB = document.getElementById('b');
var answerC = document.getElementById('c');
var answerD = document.getElementById('d');
var startQuiz = document.getElementById('start-quiz');
var quizDirections = document.getElementById('start');
var scoreName = document.querySelector('#name-form');
var submitName = document.querySelector('#save-name');
var scoreListEl = document.querySelector('#score-list');
var formEl = document.getElementById('name-blank');

// When loading the page hide everything except directions and start button
function pageLoad() {
    startQuiz.style.display = 'block';
    question1.style.display = 'none';
    question2.style.display = 'none';
    question3.style.display = 'none';
    question4.style.display = 'none';
    question5.style.display = 'none';
    scoreName.style.display = 'none';
    submitName.style.display = 'none';
    quizDirections.style.display = 'block';
}

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
            finalScore();
        }
    }, 1000);
}

// When an answer is clicked the color of the answer is changed
function aAnswer() {
    answerA.style.backgroundColor = '#5b71d6';
    answerB.style.backgroundColor = '#253995';
    answerC.style.backgroundColor = '#253995';
    answerD.style.backgroundColor = '#253995';
}
function bAnswer() {
    answerA.style.backgroundColor = '#253995';
    answerB.style.backgroundColor = '#5b71d6';
    answerC.style.backgroundColor = '#253995';
    answerD.style.backgroundColor = '#253995';
}
function cAnswer() {
    answerA.style.backgroundColor = '#253995';
    answerB.style.backgroundColor = '#253995';
    answerC.style.backgroundColor = '#5b71d6';
    answerD.style.backgroundColor = '#253995';
}
function dAnswer() {
    answerA.style.backgroundColor = '#253995';
    answerB.style.backgroundColor = '#253995';
    answerC.style.backgroundColor = '#253995';
    answerD.style.backgroundColor = '#5b71d6';
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

// Create a list of scores
var scoreList = function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    console.log(name);

    // catch for if the name is empty, give alert
    if (!name) {
        alert('Please enter your name');
        return;
    }

    // create a new list item with the name and score
    var scoreDataObj = {
        name: name,
        score: timeLeft
    };
    console.log(scoreDataObj);
    createListEl(scoreDataObj);

    // Put the scores in local storage
    leaderBoard.push(scoreDataObj);
    localStorage.setItem('leaderBoard', JSON.stringify(leaderBoard));
}

var createListEl = function(scoreDataObj) {
    var highScoreEl = document.createElement('li');
    highScoreEl.className = 'score-results';
    scoreListEl.appendChild(highScoreEl);
    highScoreEl.innerHTML = scoreDataObj.name + "'s score: " + scoreDataObj.score;
};

var loadScores = function() {
    // First empty the score list to prevent duplicates
    scoreListEl.innerHTML = '';

    // Put the scores in local storage/array
    leaderBoard = JSON.parse(localStorage.getItem('leaderBoard')) || [];

    // If there are no scores set the leaderBoard to an empty array
    if (!leaderBoard) {
        console.log('No scores yet');
        return false;
    }
    else {
        console.log('Saved scores found');

        // Load scores onto the page
        for (var i = 0; i < leaderBoard.length; i++) {
            createListEl(leaderBoard[i]);
        }
    }

};

// When the submit button is clicked the name and score are added to the list
formEl.addEventListener('submit', scoreList);