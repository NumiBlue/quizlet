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
const answers = { 'myQ0': 2, 'myQ1': 1, 'myQ2': 3, 'myQ3':1, 'myQ4': 4, 'myQ5': 1};
//Put answers in local storage
localStorage.setItem('answers', JSON.stringify, (answers));
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