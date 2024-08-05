document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const action = params.get('action');

  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      if (action === 'getQuestions') {
        getQuestions(data);
      } else if (action === 'postQuestion') {
        const question = params.get('question');
        if (question) {
          postQuestion(data, question);
        }
      } else if (action === 'postAnswer') {
        const questionId = parseInt(params.get('questionId'));
        const answer = params.get('answer');
        if (questionId && answer) {
          postAnswer(data, questionId, answer);
        }
      }
    });
});

function getQuestions(data) {
  sendJSONResponse(data.questions);
}

function postQuestion(data, questionText) {
  const newQuestion = {
    id: data.questions.length + 1,
    question: questionText,
    answers: []
  };
  data.questions.push(newQuestion);
  saveDB(data);
  sendJSONResponse({ message: 'Question added successfully' });
}

function postAnswer(data, questionId, answerText) {
  const question = data.questions.find(q => q.id === questionId);
  if (question) {
    question.answers.push(answerText);
    saveDB(data);
    sendJSONResponse({ message: 'Answer added successfully' });
  } else {
    sendJSONResponse({ error: 'Question ID not found' }, 404);
  }
}

function sendJSONResponse(response, status = 200) {
  const responseBody = JSON.stringify(response);
  const script = document.createElement('script');
  script.type = 'application/json';
  script.textContent = responseBody;
  document.body.appendChild(script);
  console.log(responseBody);
}

function saveDB(data) {
  localStorage.setItem('db', JSON.stringify(data));
}

// Load the db from localStorage if available
const savedDB = localStorage.getItem('db');
if (savedDB) {
  db = JSON.parse(savedDB);
} else {
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      db = data;
      localStorage.setItem('db', JSON.stringify(db));
    });
}
