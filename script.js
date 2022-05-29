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
var setTime = 60;
//global for displaying questions

//on click, start
document.getElementById("start-btn").addEventListener("click", function () {
  var interval = setInterval(function () {
    setTime = setTime - 1;
    if (setTime == 0) {
      clearInterval(interval)
    }
  document.getElementById("timer").textContent = setTime;
  }, 1000)
  //display first question by calling function
  
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


//start button
const startButton = document.querySelector("#start")


//Questions
const myQuestions= [
  //0
  myQ0= {
  question: "Rumi was ______.",
 options: ["a Roman Emperor", "a Sufi mystic and poet", "a Taoist monk", "an American beat poet"],
 answer: "1"
},
//1
myQ1= {
  question: "What book did St. Theresa of Avila write",
  options: ["The Interior Castle", "Dark Night of the Soul", "Conversations with God", "The Necronomicon"],
  answer: "0"
},
//2
myQ2= {
  question: "Mirabai was a devotee of which god?",
  options: ["Zeus", "Durga", "Sri Krishna", "Siddhartha Gautama"],
  answer: "2"
},
//3
myQ3= {
  question: "What was the Buddha's original name?",
  options: ["Siddhartha Gautama", "His Holiness, the Dalai Lama", "St. Patrick", "Gupta"],
  answer: "0"
},
//4
myQ4= {
  question: "St. Phoebe is mentioned in the Bible as a ______?",
   options: ["Prophetess", "Martyr", "Wife of an Apostle", "Deacon"],
   answer: "3"
},
//5
myQ5= {
  question: "St. Hildegard of Bingen described the influence of God as what?",
  options: ["The greening", "the darkening", "the shining", "the awakening"],
  answer: "0"
}
]
//For each question, grab question div and each input
//Take array answers, display in inputs, and display question to 42, store as array (array methods)
//Stringify and Store answers
const answers = { 'myQ0': 2, 'myQ1': 1, 'myQ2': 3, 'myQ3':1, 'myQ4': 4, 'myQ5': 1};
//Put answers in local storage
localStorage.setItem('answers', JSON.stringify, (answers));
//add points


let currentQuestion = 0;
let score = 0;
let totalTime = 60;
let currentAnswer = "";
let a;

function showQuestion() {
	$("#question").text(askAllQuestion[currentQuestion].question);
	currentAnswer = askAllQuestion[currentQuestion].answer;
	for (
		let round = 0;
		round < askAllQuestion[currentQuestion].options.length;
		round++
	) {
		let option = $("<button>")
			.addClass("btn btn-success btn-lg btn-block selectedAnswer")
			.text(askAllQuestion[currentQuestion].options[lap])
			.attr("value", askAllQuestion[currentQuestion].options[lap]);
		$("#options").append(option);
	}
}
$(document).on("click", ".selectedAnswer", function () {
	let chosenAnswer = $(this).val();
	if (chosenAnswer === nowAnswer) {
		$("#result").text("That is Correct!");
		score++;
		checkGame();
	} else {
		$("#result").text("Sorry, that's not the correct answer.");
		score--;
		checkGame();
	}
});
// end of the game function
function checkGame() {
	if (currentQuestion >= 6 || totalTime <= 0) {
		$("#question").text("Game Over");
		$("#options").empty();
		$("#result").text(`Your total score is ${score}`);
		$("#start").show();
		clearInterval(a);
		currentQuestion = 0;
		score = 0;
		totalTime = 60;
		currentAnswer = "";
	} else {
		currentQuestion++;
		$("#question").empty();
		$("#options").empty();
		showQuestion();
	}
}