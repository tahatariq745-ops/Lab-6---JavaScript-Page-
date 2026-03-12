export const questions = [

{
question:"Which language runs in the browser?",
options:["Java","C","JavaScript","Python"],
answer:"JavaScript"
},

{
question:"What does DOM stand for?",
options:[
"Document Object Model",
"Data Object Model",
"Desktop Oriented Mode",
"Digital Object Model"
],
answer:"Document Object Model"
},

{
question:"Which keyword declares variables in JS?",
options:["var","int","string","float"],
answer:"var"
}

];


// Arrow Function
export const checkAnswer = (selected, correct) => selected === correct;


// Promise Example
export const fetchQuestions = () => {

return new Promise((resolve) => {

setTimeout(() => {
resolve(questions);
},500);

});

};