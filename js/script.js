var viewHighscoresEl = document.querySelector(".view-highscores");
var timerEl = document.querySelector(".timer");
var infoBoxEl = document.querySelector(".info-box");
var infoTitleEl = document.querySelector(".info-title");
var infoTextEl = document.querySelector(".info-text");
var startBtnEl = document.querySelector(".start-btn");
var quizBoxEl = document.querySelector("quiz-box");
var quizTextEl = document.querySelector(".ques-text");
var ansOptionsEl = document.querySelector(".ans-options");
var grade = document.querySelector("#grade");

var quesCount = 0
var quesNumb = 1
var userScore = 0
var quesIndex = 0
var myQuestions = [
    {
        numb: 1,
        question: "Which of these is not a data type supported by JavaScript?",
        answer: "Event",
        options: [
            "Number",
            "String",
            "Event",
            "Object"
        ]
    },
    {
        numb: 2,
        question: "Which of the following is correct about features of JavaScript?",
        answer: "All of the above",
        options: [
            "JavaScript is a lightweight, interpreted programming language",
            "Javascript is designed for creating network-centric applications",
            "JavaScript is complementary to and integrated with Java",
            "All of the above"
        ]
    },
    {
        numb: 3,
        question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
        answer: "Global variable",
        options: [
            "Global variable",
            "Local variable",
            "Both 1. and 2.",
            "None of the above"
        ]
    },
    {
        numb: 4,
        question: "Which built-in method returns the length of the string?",
        answer: "length()",
        options: [
            "six()",
            "length()",
            "index()",
            "amount()"
        ]
    },
    {
        numb: 5,
        question: "Which of the following code creates an object?",
        answer: "var book = new Object();",
        options: [
            "var book = Object();",
            "var book = new Object();",
            "var book = new OBJECT();",
            "var book = new Book();"
        ]
    }
];
// if start button is clicked

function startTimer() {
    var counter = 60;
    setInterval(function () {
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
    document.getElementById("count").style = "color:blue;";
    document.getElementById("info-box").style.display = "none";
    document.getElementById("quiz-box").style.display = "block";
    startTimer();
    startQuestions(0);
};

function startQuestions(index) {
    var quesTextEl = document.querySelector(".ques-text");
    var currentQues = myQuestions[quesIndex];
    quesTextEl.textContent = currentQues.question
    ansOptionsEl.innerHTML = "";
    currentQues.options.forEach(function(option, i){
        var optionBtn = document.createElement("button")
        optionBtn.setAttribute("value", option)
        optionBtn.textContent = i + 1 + ". " + option
        optionBtn.onclick = optionsSelected
        ansOptionsEl.appendChild(optionBtn)
    })
    // var quesTag = '<span>' + myQuestions[index].numb + ". " + myQuestions[index].question + '</span>';
    // var optionTag = `<div class="option"><button value=${myQuestions[index].options[0]}>` + myQuestions[index].options[0] + '</button></div>' + `<div class="option"><button value=${myQuestions[index].options[1]}>` + myQuestions[index].options[1] + '</button></div>' + `<div class="option"><button value=${myQuestions[index].options[2]}` + myQuestions[index].options[2] + '</button></div>' + `<div class="option"><button value=${myQuestions[index].options[3]}` + myQuestions[index].options[3] + '</button></div>';
    // quesTextEl.innerHTML = quesTag;
    // ansOptionsEl.innerHTML = optionTag;

    // var option = ansOptionsEl.querySelectorAll(".option");

    // for (i = 0; i < option.length; i++) {
    //     option[i].onclick = optionsSelected;
    // }
}

var tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
var crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionsSelected(answer) {
    var userAns = this.value;
    var correctAns = myQuestions[quesCount].answer;
    var allOptions = ansOptionsEl.children.length;
    console.log(userAns);
    console.log(correctAns);

    if (userAns == correctAns) {
        userScore += 10;
        //answer.classList.add("correct");
        grade.textContent = "Your answer is correct!"
        //answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your current score is " + userScore);
    }
    else {
        grade.textContent = "Your answer is incorrect!"
        //answer.classList.add("incorrect");
        //answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");

        // for (i = 0; i < allOptions; i++) {
        //     if (option_list.children[i].textContent == correcAns) {
        //         option_list.children[i].setAttribute("class", "option correct");
        //         option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
        //         console.log("Auto selected correct answer.");
        //     }
        // }
    // }
    // for (i = 0; i < allOptions; i++) {
    //     option_list.children[i].classList.add("disabled");
    }
    quesIndex++
    startQuestions();
}
