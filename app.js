import {fetchQuestions, checkAnswer} from "./utils.js";

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submitBtn");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedOption = null;


// IIFE Initialization
(async function(){

questions = await fetchQuestions();

loadQuestion();

})();


// Load Question Function
const loadQuestion = () => {

const {question, options} = questions[currentQuestion]; // destructuring

questionEl.textContent = question;

optionsEl.innerHTML = "";

options.map(option => {

const div = document.createElement("div");

div.textContent = option;

div.classList.add("option");

div.addEventListener("click", () => {

selectedOption = option;

document.querySelectorAll(".option").forEach(o => o.style.background="");

div.style.background="#ddd";

});

optionsEl.appendChild(div);

});

};


// Submit Button Event
submitBtn.addEventListener("click", () => {

if(!selectedOption) return;

const correct = questions[currentQuestion].answer;

if(checkAnswer(selectedOption, correct)){

feedbackEl.textContent = "Correct Answer!";
score++;

}else{

feedbackEl.textContent = `Wrong! Correct answer is ${correct}`;

}

currentQuestion++;

selectedOption = null;

setTimeout(() => {

feedbackEl.textContent="";

if(currentQuestion < questions.length){

loadQuestion();

}else{

endQuiz();

}

},1000);

});


// End Quiz
const endQuiz = () => {

questionEl.textContent = "Quiz Completed";

optionsEl.innerHTML = "";

submitBtn.style.display = "none";

scoreEl.textContent = `Final Score: ${score} / ${questions.length}`;

};