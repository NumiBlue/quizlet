//questions
//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
var myQ1 = {
    question: "What does DOM mean?",
    answer:"The Dom...",
}

var myQ2 = {
    question: "What is HTML?",
    answer: "HTML..."
}

var allQuestions = [myQ1, myQ2];
console.log(allQuestions);