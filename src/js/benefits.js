const questions = document.querySelectorAll('.column_benefits p');
const answers = document.querySelectorAll('.row.down.answer');

function showAnswer(index) {
  // Remove a classe "selected" de todas as perguntas
  questions.forEach(question => {
    question.classList.remove('selected');
  });

  // Adiciona a classe "selected" à pergunta atual
  questions[index].classList.add('selected');

  // Oculta a resposta anterior (se houver alguma)
  const previousAnswer = document.querySelector('.row.down.selected');
  if (previousAnswer) {
    previousAnswer.classList.remove('selected');
  }

  // Mostra a resposta correspondente
  answers[index].classList.add('selected');
}

// Adiciona um ouvinte de eventos para cada pergunta
questions.forEach((question, index) => {
  question.addEventListener('click', () => {
    showAnswer(index);
  });
});

// Mostra a resposta inicial (a primeira pergunta)
showAnswer(0);