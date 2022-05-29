//global variables
var score = 0;
var questionsIndex = 0;

//DOM elements
var questionDiv = document.querySelector("#questionDiv");


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

//start button
