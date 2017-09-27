'use strict';

var submit = document.getElementById('submit');

function gradeQuiz() {
  var q1Answer, q1Response, q2Answer, q2Response, q3Input, q3Response, q3Answer, q3Guess, q4Input, q4Response, q4Answer, q4Guess, q5AnswerB, q5AnswerC, q5AnswerE, q5AnswerF, q5Response;
  var points = 0;

  // Checks Q1
  q1Answer = document.getElementById('q1C');
  q1Response = document.getElementById('q1Response');
  if (q1Answer.checked) {
    q1Response.textContent = 'Correct';
    points++;
  } else {
    q1Response.textContent = 'Wrong';
  }

  // Checks Q2
  q2Answer = document.getElementById('q2A');
  q2Response = document.getElementById('q2Response');
  if (q2Answer.checked) {
    q2Response.textContent = 'Correct';
    points++;
  } else {
    q2Response.textContent = 'Wrong';
  }

  // Checks Q3
  q3Input = document.getElementById('q3Input');
  q3Response = document.getElementById('q3Response');
  q3Answer = 'ANONYMOUS';
  q3Guess = q3Input.value;
  if (q3Guess.toUpperCase() === q3Answer) {
    q3Response.textContent = 'Correct';
    points++;
  } else {
    q3Response.textContent = 'Wrong';
  }

  // Checks Q4
  q4Input = document.getElementById('q4Input');
  q4Response = document.getElementById('q4Response');
  q4Answer = 'TARGET';
  q4Guess = q4Input.value;
  if (q4Guess.toUpperCase() === q4Answer) {
    q4Response.textContent = 'Correct';
    points++;
  } else {
    q4Response.textContent = 'Wrong';
  }

  // Checks Q5
  q5AnswerB = document.getElementById('q5B');
  q5AnswerC = document.getElementById('q5C');
  q5AnswerE = document.getElementById('q5E');
  q5AnswerF = document.getElementById('q5F');
  q5Response = document.getElementById('q5Response');
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

  // Highlight or Fill In Correct Answers
  q1Answer.parentNode.style.background = '#d2e8ef';
  q2Answer.parentNode.style.background = '#d2e8ef';
  q5AnswerB.parentNode.style.background = '#d2e8ef';
  q5AnswerC.parentNode.style.background = '#d2e8ef';
  q5AnswerE.parentNode.style.background = '#d2e8ef';
  q5AnswerF.parentNode.style.background = '#d2e8ef';
  q3Input.value = 'Answer: ' + q3Answer;
  q4Input.value = 'Answer: ' + q4Answer;

  // Show Points
  document.getElementById('points').innerHTML = 'You scored ' + points + ' out of 5 points!';
}

submit.onclick = gradeQuiz;
