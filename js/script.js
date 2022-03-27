var viewHighscoresEl = document.querySelector(".view-highscores");
var timerEl = document.querySelector(".timer");
var infoBoxEl = document.querySelector(".info-box");
var startTitleEl = document.querySelector(".info-title");
var startInfoEl = document.querySelector(".info-text");
var startBtnEl = document.querySelector(".start-btn");
var quizBoxEl = document.querySelector("quiz-box");
var quizTextEl = document.querySelector(".quiz-text");
var ansOptionsEl = document.querySelector(".ans-options");

var myQuestions = [
    {
        question: "Which of these is not a data type supported by JavaScript?",
        options: {
            1: "Number",
            2: "String",
            3: "Event",
            4: "Object"
        },
        correctOption: "3"
    },
    {
        question: "Which of the following is correct about features of JavaScript?",
        options: {
            1: "JavaScript is a lightweight, interpreted programming language",
            2: "Javascript is designed for creating network-centric applications",
            3: "JavaScript is complementary to and integrated with Java",
            4: "All of the above"
        },
        correctOption: "4"
    },
    {
        question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
        options: {
            1: "Global variable",
            2: "Local variable",
            3: "Both 1. and 2.",
            4: "None of the above"
        },
        correctOption: "1"
    },
    {
        question: "Which built-in method returns the length of the string?",
        options: {
            1: "six()",
            2: "length()",
            3: "index()",
            4: "amount()"
        },
        correctOption: "2"
    },
    {
        question: "Which of the following code creates an object?",
        options: {
            1: "var book = Object();",
            2: "var book = new Object();",
            3: "var book = new OBJECT();",
            4: "var book = new Book();"
        },
        correctOption: "2"
    }
];

function startTimer() {
    var counter = 60;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert('Sorry you are out of time.');
            clearInterval(counter);
        }
    }, 1000);
    startBtnEl.classList.add("hide");
}
function start() {
    document.getElementById("count").style="color:blue;";
    startTimer();
};