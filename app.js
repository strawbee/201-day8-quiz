'use strict';

var points = 0;
var submit = document.getElementById('submit');

function gradeQuiz() {
  // Checks Q1
  var q1Answer = document.getElementById('q1C');
  var q1Response = document.getElementById('q1Response');
  if (q1Answer.checked) {
    q1Response.textContent = 'Correct';
    points++;
  } else {
    q1Response.textContent = 'Wrong';
  }

  // Checks Q2
  var q2Answer = document.getElementById('q2A');
  var q2Response = document.getElementById('q2Response');
  if (q2Answer.checked) {
    q2Response.textContent = 'Correct';
    points++;
  } else {
    q2Response.textContent = 'Wrong';
  }

  // Checks Q3
  var q3Input = document.getElementById('q3Input');
  var q3Response = document.getElementById('q3Response');
  var q3Answer = 'ANONYMOUS';
  var q3Guess = q3Input.value;
  if (q3Guess.toUpperCase() === q3Answer) {
    q3Response.textContent = 'Correct';
    points++;
  } else {
    q3Response.textContent = 'Wrong';
  }

  // Checks Q4
  var q4Input = document.getElementById('q4Input');
  var q4Response = document.getElementById('q4Response');
  var q4Answer = 'TARGET';
  var q4Guess = q4Input.value;
  if (q4Guess.toUpperCase() === q4Answer) {
    q4Response.textContent = 'Correct';
    points++;
  } else {
    q4Response.textContent = 'Wrong';
  }

  // Checks Q5
  var q5AnswerB = document.getElementById('q5B');
  var q5AnswerC = document.getElementById('q5C');
  var q5AnswerE = document.getElementById('q5E');
  var q5AnswerF = document.getElementById('q5F');
  var q5Response = document.getElementById('q5Response');
  if (q5AnswerB.checked && q5AnswerC.checked && q5AnswerE.checked && q5AnswerF.checked) {
    q5Response.textContent = 'Correct';
    points++;
  } else {
    q5Response.textContent = 'Wrong';
  }

  // Disable Form. There is surely a more efficient way to loop or do this, but too lazy right now.
  document.getElementById('q1A').disabled = true;
  document.getElementById('q1B').disabled = true;
  document.getElementById('q1C').disabled = true;
  document.getElementById('q1D').disabled = true;
  document.getElementById('q2A').disabled = true;
  document.getElementById('q2B').disabled = true;
  document.getElementById('q2C').disabled = true;
  document.getElementById('q2D').disabled = true;
  document.getElementById('q5A').disabled = true;
  document.getElementById('q5B').disabled = true;
  document.getElementById('q5C').disabled = true;
  document.getElementById('q5D').disabled = true;
  document.getElementById('q5E').disabled = true;
  document.getElementById('q5F').disabled = true;
  q3Input.setAttribute('disabled', 'disabled');
  q4Input.setAttribute('disabled', 'disabled');
  submit.setAttribute('disabled', 'disabled');

  // Show Points
  document.getElementById('points').innerHTML = 'You scored ' + points + ' out of 5 points!';
}

submit.onclick = gradeQuiz;
