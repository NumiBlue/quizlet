// variables by ID
var beginEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var contentEl = document.getElementById("content");
var scoreEl = document.getElementById("high-score");
// Score Variable
var oldTales = [];
// Timer 
var timeLeft = 59;
var stopClock = [];
var isIncorrect = false;
// points 
var points = [];
//Questions
var questions= [
  (myQ0 = {
  question: "Rumi was ______.",
 options: ["a Roman Emperor", "a Sufi mystic and poet", "a Taoist monk", "an American beat poet"],
 answer: "2"
}),
(myQ1 =
 {
  question: "What book did St. Theresa of Avila write",
  options: ["The Interior Castle", "Dark Night of the Soul", "Conversations with God", "The Necronomicon"],
  answer: "1"
}),
 (myQ2= 
  {
  question: "Mirabai was a devotee of which god?",
  options: ["Zeus", "Durga", "Sri Krishna", "Siddhartha Gautama"],
  answer: "3"
}),
(myQ3= 
{
  question: "What was the Buddha's original name?",
  options: ["Siddhartha Gautama", "His Holiness, the Dalai Lama", "St. Patrick", "Gupta"],
  answer: "1"
}),
(myQ4=
{
  question: "St. Phoebe is mentioned in the Bible as a ______?",
   options: ["Prophetess", "Martyr", "Wife of an Apostle", "Deacon"],
   answer: "4"
}),
(myQ5=
{
  question: "St. Hildegard of Bingen described the influence of God as what?",
  options: ["The greening", "the darkening", "the shining", "the awakening"],
  answer: "1"
})
]

quesNum = [];

// Display the questions (one at a time)
function displayQuestions() {
  quesCount = questions[quesNum.length];
  // clear old content
  contentEl.innerHTML = "";

  // add new question
  var newQue = document.createElement("h1");
  newQue.setAttribute("class", "text-center", "col-lg-12");
  newQue.innerHTML = quesCount.question;
  // append to div
  document.getElementById("content").appendChild(newQue);

  // add new answer list
  for (let i = 0; i < 4; i++) {
    var answers = document.createElement("button");
    answers.setAttribute("class", "btn btn-light mb-3 col-lg-12 text-center");
    answers.innerHTML = [i + 1] + ": " + quesCount.choices[i];
    // use a variable # for id to target/select the right answer
    answers.setAttribute("id", [i + 1]);
    document.getElementById("content").appendChild(answers);
  }
  var answerEl = document.getElementById("1");
  var answer2El = document.getElementById("2");
  var answer3El = document.getElementById("3");
  var answer4El = document.getElementById("4");
  questionLog(answerEl, answer2El, answer3El, answer4El);
}

// Answer Questions
var questionLog = function (answerEl, answer2El, answer3El, answer4El) {
  answerEl.addEventListener("click", answerValidator);
  answer2El.addEventListener("click", answerValidator);
  answer3El.addEventListener("click", answerValidator);
  answer4El.addEventListener("click", answerValidator);

  // compares 
  function answerValidator() {
    var input = event.target.textContent;
    const key = input.split("");

    contentEl.innerHTML = "";
    // if the user answers correctly, 1 point pushed into points
    if (key[0] == quesCount.answer) {
      var correct = document.createElement("p");
      correct.setAttribute("class", "col-lg-8 text-center");
      correct.innerHTML = "CORRECT!";
      document.getElementById("content").appendChild(correct);
      points.push(1);
    }

    // if not 
    else {
      var incorrect = document.createElement("p");
      incorrect.setAttribute("class", "col-lg-8 text-center");
      incorrect.innerHTML = "Incorrect";
      document.getElementById("content").appendChild(incorrect);
      isIncorrect = true;
      decreaseT(isIncorrect);
      // countDown(isTrue)
    }

    // anext button
    var next = document.createElement("button");
    next.setAttribute("class", "btn btn-primary mb-3 col-lg-8 text-center");
    next.innerHTML = "next question";
    document.getElementById("content").appendChild(next);
    next.setAttribute("id", "next");
    var nextEl = document.getElementById("next");
    nextQuestion(nextEl);
  }
};

// Next Question Function
var nextQuestion = function (nextEl) {
  // When "next" is clicked
  nextEl.addEventListener("click", bleh);
  function bleh() {
    // If there are still questions to be answered, push # into array and run displayQuestions
    if (quesNum.length < 5) {
      quesNum.push(1);
      displayQuestions();
    }
    // Else, call endgame function
    else {
      gameOver();
    }
  }
};

function decreaseT(isIncorrect) {
  console.log(isIncorrect);
  if (isIncorrect) {
    timeLeft = timeLeft - 2;
    console.log(timeLeft);
    timerEl.textContent = "Time remaining is: " + timeLeft;
  }
  isIncorrect = true;
}

// Start the timer
function countDown() {
  
  var timeInterval = setInterval(function () {
    if (timeLeft > 1 && stopClock < 1) {
   
      timerEl.textContent = "Time remaining: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

//  Game Over, man!
var gameOver = function () {
  // Stop timer
  stopClock.push(1);
  timerEl.textContent = "";
  // Clear the page
  contentEl.innerHTML = "";

  var newQue = document.createElement("h1");
  newQue.setAttribute("class", "text-center", "col-lg-12");
  newQue.innerHTML = "Game Over";
  // append to div
  document.getElementById("content").appendChild(newQue);

  // User's Score
  var points = points.length * 2;
  var overAll = document.createElement("p");
  overAll.innerHTML = "Your score: " + points;
  overAll.setAttribute("class", "text-center col-lg-12");
  document.getElementById("content").appendChild(overAll);

  // Create a form to store initials
  var formDirections = document.createElement("p");
  formDirections.innerHTML = "Enter your initials below!";
  formDirections.setAttribute("class", "text-center col-lg-12");
  document.getElementById("content").appendChild(formDirections);

  var userInitials = document.createElement("form");
  userInitials.setAttribute("id", "user-input");
  document.getElementById("content").appendChild(userInitials);

  var input = document.createElement("input");
  input.setAttribute("class", "col-lg-12");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Ex: CD");
  input.setAttribute("id", "user-initials");
  document.getElementById("user-input").appendChild(input);

  var inputInitialsAll = document.createElement("button");
  inputInitialsAll.setAttribute(
    "class",
    "btn btn-primary mt-3 col-lg-12 text-center"
  );
  inputInitialsAll.innerHTML = "Submit";
  inputInitialsAll.setAttribute("id", "submit-Initials");
  document.getElementById("user-input").appendChild(inputInitialsAll);

  // Send to through an input validator
  var inputInitial = document.getElementById("submit-Initials");
  var pullScore = document.getElementById("user-initials");
  areTheyThere(inputInitial, pullScore);
};

// Initial validator
var areTheyThere = function (inputInitial, pullScore) {
  inputInitial.addEventListener("click", check);
  function check(event) {
    event.preventDefault();

    initials = pullScore.value.trim();
    // Check field
    if (initials) {
      pullScore.value = "";
      // If yes - validate length
      if (initials.length <= 2) {
        console.log("good length");
        // local storage function
        saveYoScore(initials);
      }
    
      else {
        alert(
          "Must Put in 2 Initials"
        );
      }
    }
    // Else
    else {
      alert("Please enter your initials");
    }
  }
};

// Save scores to local storage
function saveYoScore(initials) {
  //Save the user's highscore in an array
  var points = points.length * 2;
  var scoreInfo = [];
  scoreInfo.push(points);
  scoreInfo.push(initials);

  // Save search to local storage
  // read the string, localStorage.getItem('setUsernamesArray'),
  var oldHeroes = window.localStorage.getItem("Score Board");
  // then convert it to an array with JSON.parse,
  var oldTales = JSON.parse(oldHeroes);
  console.log(oldTales);
  if (oldTales === null) {
    // create a new array
    var oldTales = [];
    // then push to the array,
    oldTales.push(scoreInfo);
  } else {
    // then push to the array,
    oldTales.push(scoreInfo);
  }
  // and then store it again with localStorage.setItem('setUsernamesArray', JSON.stringify(array))
  window.localStorage.setItem("Score Board", JSON.stringify(oldTales));

  
  highScore(initials);
}

// High Scores display
var highScore = function (initials) {
  // Clear the page
  contentEl.innerHTML = "";

  // Display Old Scores
  var newQue = document.createElement("h1");
  newQue.setAttribute("class", "text-center", "col-lg-12");
  newQue.innerHTML = "Score Board";
  document.getElementById("content").appendChild(newQue);

  // Display Scoreboard Data
  var oldHeroes = window.localStorage.getItem("Score Board");
  var scoreData = JSON.parse(oldHeroes);

  if (oldHeroes) {
    for (let i = 0; i < scoreData.length; i++) {
      var scoreListing = scoreData[i];
      var savedUsername = scoreListing[0];
      var savedPoints = scoreListing[1];
      var scoreBoard = document.createElement("p");
      scoreBoard.innerHTML = savedPoints + " : " + savedUsername;
      scoreBoard.setAttribute("class", "text-center col-lg-12");
      document.getElementById("content").appendChild(scoreBoard);
    }

    
    var points = points.length * 2;
    var overAll = document.createElement("p");
    overAll.innerHTML = "Your score- " + initials + " Score: " + points;
    overAll.setAttribute("class", "text-center col-lg-12");
    document.getElementById("content").appendChild(overAll);

    // Play again
    var again = document.createElement("button");
    again.setAttribute("class", "btn btn-primary text-center");
    again.innerHTML = "Play Again";
    again.setAttribute("id", "play-again");
    document.getElementById("content").appendChild(again);
    againEl = document.getElementById("play-again");
    playAgain(againEl);
  } else {
    // Return to Home
    var again = document.createElement("button");
    again.setAttribute("class", "col-12 btn btn-primary text-center");
    again.innerHTML = "Return to Home";
    again.setAttribute("id", "play-again");
    document.getElementById("content").appendChild(again);
    againEl = document.getElementById("play-again");
    playAgain(againEl);
  }

  // Clear Scores button
  scoreEl.innerHTML = "";
  timerEl.innerHTML = "";
  var clear = document.createElement("button");
  clear.setAttribute("class", "btn btn-light text-center");
  clear.innerHTML = "Clear Highscores";
  clear.setAttribute("id", "clear-scores");
  document.getElementById("timer").appendChild(clear);

  var forgetItEl = document.getElementById("clear-scores");
  forgetIt(forgetItEl);
};

// new
function playAgain() {
  againEl.addEventListener("click", reload);
  function reload() {
    window.location.reload();
  }
}

//Clear Scores
var forgetIt = function (forgetItEl) {
  forgetItEl.addEventListener("click", noScore);
  function noScore() {
    localStorage.removeItem("Score Board");
    window.location.reload();
  }
};

// use click to coutdown and display
beginEl.addEventListener("click", displayQuestions);
//beginEl.addEventListener("click", displayQuestions);
//scoreEl.addEventListener("click", highScore);
