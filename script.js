//global variables
var currentQ = 0;
var time = questions.length * 15;
var timerId;

//DOM elements
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
//Questions
const myQuestions= [
  {
  question: "Rumi was ______.",
 options: ["a Roman Emperor", "a Sufi mystic and poet", "a Taoist monk", "an American beat poet"],
 answer: "a Sufi mystic and poet"
},

 {
  question: "What book did St. Theresa of Avila write",
  options: ["The Interior Castle", "Dark Night of the Soul", "Conversations with God", "The Necronomicon"],
  answer: "The Interior Castle"
},
 {
  question: "Mirabai was a devotee of which god?",
  options: ["Zeus", "Durga", "Sri Krishna", "Siddhartha Gautama"],
  answer: "Sri Krishna"
},
{
  question: "What was the Buddha's original name?",
  options: ["Siddhartha Gautama", "His Holiness, the Dalai Lama", "St. Patrick", "Gupta"],
  answer: "Siddhartha Gautama"
},
{
  question: "St. Phoebe is mentioned in the Bible as a ______?",
   options: ["Prophetess", "Martyr", "Wife of an Apostle", "Deacon"],
   answer: "Deacon"
},
{
  question: "St. Hildegard of Bingen described the influence of God as what?",
  options: ["The greening", "the darkening", "the shining", "the awakening"],
  answer: "The greening"
}
]
//For each question, grab question div and each input
//Take array answers, display in inputs, and display question to 42, store as array (array methods)
//Stringify and Store answers
//const answers = { 'myQ0': 2, 'myQ1': 1, 'myQ2': 3, 'myQ3':1, 'myQ4': 4, 'myQ5': 1};
//Put answers in local storage
//localStorage.setItem('answers', JSON.stringify, (answers));
//add points

//start button
function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  //unhide
  questionsEl.removeAttribute("class");

  //timer
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQ];

  // update question with current question
  var questionEl = document.getElementById("question-question");
  questionEl.textContent = currentQuestion.question;

  // clear out any old question options
  optionsEl.innerHTML = "";

  // loop over options
  currentQuestion.options.forEach(function(choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceNode.onclick = questionClick;

     // display on the page
     optionsEl.appendChild(choiceNode);
    });
  }
  
  function questionClick() {
    // if wrong
    if (this.value !== questions[currentQ].answer) {
      // penalize time
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
  
      // display new time on page
      timerEl.textContent = time;

       // if right/wrong
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question
  currentQ++;

  // check if out of questions
  if (currentQ === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions section
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();

  // checkvalue wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score 
    var newScore = {
      score: time,
      initials: initials
    };

    // save localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// user clicks to submit initials
submitBtn.onclick = saveHighscore;

// restart
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
  }

  //highscores
  function showScores() {
    
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
   highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // create li tag high score
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      // display on page
      var whichEl = document.getElementById("highscores");
      whichEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearHighscores;
  
  // run function when page loads
  showScores();
  
