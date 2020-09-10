var startbutton = document.getElementById("start-btn")
var startpage = document.getElementById("start-page")
var questionpage = document.getElementById("question-page")
var questionEl = document.getElementById("question-text")
var button1 = document.getElementById("btn1")
var button2 = document.getElementById("btn2")
var button3 = document.getElementById("btn3")
var button4 = document.getElementById("btn4")
var timeEl = document.getElementById("timer")
var score = document.getElementById("score")
var gameover = document.getElementById("game-over")
var tryagain = document.getElementById("tryagain-btn")
var submitbtn = document.getElementById("submit")

var currentQuestionsIndex = 0
var time = 76
var correctQuestions = 0

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["Strings", "Booleans", "Alerts", "Numbers",],
        //rightanswer: 2
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        answers:["Parentheses","Curly Brackets","Square Brackets","Quotes"],
        //rightanswer: 0
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: ["Numbers & Strings", "Other Arrays", "Booleans", "All of the Above"],
        //rightanswer: 3
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        answers: ["Curly Brackets","Parentheses", "Quotations","Commas"],
        //rightasnwer: 2
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is _____.",
        answers: ["JavaScript","Console Log", "For Loops", "Bash/Terminal"],
        //rightanswer: 1
    },
    
]

// Start the quiz
startbutton.addEventListener("click", startQuiz)
function startQuiz () {
    startTimer();
    startbutton.classList.add('hide')
    startpage.classList.add('hide')
    currentQuestionIndex = 0;
    questionpage.classList.remove('hide')
    gameover.classList.add('hide')
    time = 75;
    currentQuestionsIndex = 0;
    correctQuestions = 0;
    showQuestion1();
}