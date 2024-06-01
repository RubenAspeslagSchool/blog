const questionsList = document.getElementById('questions-list');
let db = {};

// Fetch the JSON database
fetch('db.json')
  .then(response => response.json())
  .then(data => {
    db = data;
    displayQuestions();
  });

function displayQuestions() {
  questionsList.innerHTML = '';
  db.questions.forEach(question => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${question.id}: ${question.question}</strong>`;
    if (question.answers.length > 0) {
      const ul = document.createElement('ul');
      question.answers.forEach(answer => {
        const answerLi = document.createElement('li');
        answerLi.textContent = answer;
        ul.appendChild(answerLi);
      });
      li.appendChild(ul);
    }
    questionsList.appendChild(li);
  });
}

function addQuestion() {
  const newQuestionInput = document.getElementById('new-question');
  const newQuestionText = newQuestionInput.value.trim();
  if (newQuestionText) {
    const newQuestion = {
      id: db.questions.length + 1,
      question: newQuestionText,
      answers: []
    };
    db.questions.push(newQuestion);
    newQuestionInput.value = '';
    displayQuestions();
    saveDB();
  }
}

function addAnswer() {
  const questionIdInput = document.getElementById('question-id');
  const newAnswerInput = document.getElementById('new-answer');
  const questionId = parseInt(questionIdInput.value);
  const newAnswerText = newAnswerInput.value.trim();
  if (questionId && newAnswerText) {
    const question = db.questions.find(q => q.id === questionId);
    if (question) {
      question.answers.push(newAnswerText);
      questionIdInput.value = '';
      newAnswerInput.value = '';
      displayQuestions();
      saveDB();
    } else {
      alert('Question ID not found.');
    }
  }
}

function saveDB() {
  // Save the updated db to localStorage
  localStorage.setItem('db', JSON.stringify(db));
}

// Load the db from localStorage if available
const savedDB = localStorage.getItem('db');
if (savedDB) {
  db = JSON.parse(savedDB);
  displayQuestions();
}
