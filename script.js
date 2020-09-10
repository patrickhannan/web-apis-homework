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

function startTimer() {
    var timerInterval = setInterval(function() {
        time--;
        timeEl.innerHTML = "Time: " + time;
      
        if(time === 0) {
            endGame();
            stopTime();
            alert("Time is up");
        }
    }, 1000);
    function stopTime() {
        clearInterval(timerInterval)
    }
}

function showQuestion1() {
    questionEl.innerText = questions[currentQuestionsIndex].question;
    button1.innerText = questions[currentQuestionsIndex].answers[0];
    button2.innerText = questions[currentQuestionsIndex].answers[1];
    button3.innerText = questions[currentQuestionsIndex].answers[2];
    button4.innerText = questions[currentQuestionsIndex].answers[3];
    button1.onclick = function () {
        alert("Your answer is incorrect.");
        time -= 10; 
        currentQuestionsIndex++;
        showQuestion2(); 
    };
    button2.onclick = function () {
        alert("Your answer is incorrect.");
        time -= 10;
        currentQuestionsIndex++;
        showQuestion2(); 
    };
    button3.onclick = function () {
        alert("Your answer is correct.");
        currentQuestionsIndex++;
        showQuestion2(); 
        correctQuestions++
    };
    button4.onclick = function () {
        alert("Your answer is incorrect.");
        time -= 10;
        currentQuestionsIndex++;
        showQuestion2(); 
    }
}

function showQuestion2() {
    questionEl.innerText = questions[currentQuestionsIndex].question;
    button1.innerText = questions[currentQuestionsIndex].answers[0];
    button2.innerText = questions[currentQuestionsIndex].answers[1];
    button3.innerText = questions[currentQuestionsIndex].answers[2];
    button4.innerText = questions[currentQuestionsIndex].answers[3];
    button1.onclick = function () {
        alert("Your answer is correct.");
        currentQuestionsIndex++;
        showQuestion3(); 
        correctQuestions++
    };
    button2.onclick = function () {
        alert("Your answer is incorrect.");
        time -= 10;
        currentQuestionsIndex++;
        showQuestion3(); 
    };
    button3.onclick = function () {
        alert("Your answer is incorrect.");
        time -= 10;
        currentQuestionsIndex++;
        showQuestion3(); 
    };
    button4.onclick = function () {
        alert("Your answer is incorrect.");
        time -= 10;
        currentQuestionsIndex++;
        showQuestion3(); 
    }
}

function showQuestion3() {
    questionEl.innerText = questions[currentQuestionsIndex].question;
    button1.innerText = questions[currentQuestionsIndex].answers[0];
    button2.innerText = questions[currentQuestionsIndex].answers[1];
    button3.innerText = questions[currentQuestionsIndex].answers[2];
    button4.innerText = questions[currentQuestionsIndex].answers[3];
    button1.onclick = function () {
        alert("Your answer is incorrect.");
        time -= 10;
        currentQuestionsIndex++;
        showQuestion4(); 
    };
    button2.onclick = function () {
        alert("Your answer is incorrect.");
        time -= 10;
        currentQuestionsIndex++;
        showQuestion4(); 
    };
    button3.onclick = function () {
        alert("Your answer is incorrect.");
        time -= 10;
        currentQuestionsIndex++;
        showQuestion4(); 
    };
    button4.onclick = function () {
        alert("Your answer is correct.");
        currentQuestionsIndex++;
        showQuestion4(); 
        correctQuestions++
        
    }
}