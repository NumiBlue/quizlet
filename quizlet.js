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
<script>
// Set start time
var setTime = 75;

//on click, start


// Update the count down every 1 second
var x = setInterval(function() {

  // current time left
  var now = getTime();
    
  // Find the distance between now and the count down date
  var distance = setTime - now;

  //
    
  // Time calculations for seconds and milliseconds
 
  var seconds = Math.floor((distance % (1000 * 60)) / 1000, 15000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = seconds + "s ", milliseconds + "ms";
    
  // If the count down is over, end at zero
  if (distance = 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = 0;
  }
}, 1000);

//Switch to high score screen
</script>


//Questions
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

