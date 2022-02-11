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

//Timer

// Set start time
var setTime = 5;

//on click, start
document.getElementById("btn").addEventListener("click", function () {
  var interval = setInterval(function () {
    setTime = setTime - 1;
    if (setTime == 0) {
      clearInterval(interval)
    }
  document.getElementById("timer").textContent = setTime;
  }, 1000)
});

// Update the count down every 1 second
//var x = setInterval(function() {

// current time left
// var now = getTime();

// Find the distance between now and the count down date
//var distance = setTime - now;

//

// Time calculations for seconds and milliseconds

// var seconds = Math.floor((distance % (1000 * 60)) / 1000, 15000);

// Output the result in an element with id="demo"
//document.getElementById("demo").innerHTML = seconds + "s ", milliseconds + "ms";

// If the count down is over, end at zero
// if (distance = 0) {
// clearInterval(x);
//document.getElementById("demo").innerHTML = 0;
//}
//}, 1000);

//Switch to high score screen



//Questions
var myQuestions= [
 myQ1 = {
  question: "Rumi was ______.",
 options: ["a Roman Emperor", "a Sufi mystic and poet", "a Taoist monk", "an American beat poet"],
 answer: "2"
},

 myQ2 = {
  question: "What book did St. Theresa of Avila write",
  options: ["The Interior Castle", "Dark Night of the Soul", "Conversations with God", "The Necronomicon"],
  answer: "1"
},

 myQ3 = {
  question: "Mirabai was a devotee of which god?",
  options: ["Zeus", "Durga", "Sri Krishna", "Siddhartha Gautama"],
  answer: "3"
},

myQ4 = {
  question: "What was the Buddha's original name?",
  options: ["Siddhartha Gautama", "His Holiness, the Dalai Lama", "St. Patrick", "Gupta"],
  answer: "1"
},

myQ5 = {
  question: "St. Phoebe is mentioned in the Bible as a ______?",
   options: ["Prophetess", "Martyr", "Wife of an Apostle", "Deacon"],
   answer: "4"
},

myQ6= {
  question: "St. Hildegard of Bingen described the influence of God as what?",
  answer: "1",
  options: ["The greening", "the darkening", "the shining", "the awakening"],
  answer: "1"
}
]


var allQuestions = [];

// Populate Questions
function populate () {

}