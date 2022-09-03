// all variables
let time = 90;
let runningTimer;
let score= 0;
let username = "";
let qNumber;
let finalScore;
const MAX_HIGH_SCORES = 7;

const startButton = document.getElementById("startButton");
const qContainer = document.getElementById("questionsContainer");
const qElement = document.getElementById("question");
const directions = document.getElementById("directions");
const answerButtons = document.getElementById("answers");
const countdown = document.getElementById("timerArea");
const scoreArea = document.getElementById("scoreArea");
const highscoreButton = document.getElementById("showscoresButton");

// grabs highscore from local storage
let highscores = JSON.parse(localStorage.getItem("highscores"))|| [];

// adds click functions to buttons
startButton.addEventListener("click",startGame);
highscoreButton.addEventListener("click",displayscores);

// function to start the GAME
function startGame(){
    startButton.classList.add("hide");
    scoreArea.classList.add("hide");
    directions.classList.add("hide");
    answerButtons.classList.remove("hide");
    qNumber=0;
    qContainer.classList.remove("hide");
    scoreArea.innerHTML="";
    startClock();
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    showQuestion(questions[qNumber]);
}