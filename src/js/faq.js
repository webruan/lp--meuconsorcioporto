const faqQuestions = document.querySelectorAll('.row.question');
const faqAnswers = document.querySelectorAll('.item.answer');
const icons = document.querySelectorAll('.iconArrow');

function showFaqAnswer(index) {
  // Verifica se a pergunta atual já está aberta
  const isAlreadyOpen = faqQuestions[index].classList.contains('open');

  // Remove a classe "open" de todas as perguntas
  faqQuestions.forEach(question => {
    question.classList.remove('open');
  });

  // Oculta a resposta anterior (se houver alguma)
  const previousAnswer = document.querySelector('.item.answer.open');
  if (previousAnswer) {
    previousAnswer.classList.remove('open');
  }

  // Se a pergunta atual não estiver aberta, abre-a e mostra a resposta correspondente
  if (!isAlreadyOpen) {
    faqQuestions[index].classList.add('open');
    faqAnswers[index].classList.add('open');
  }

  // Remove a classe 'fa-arrow-right' de todos os ícones
  icons.forEach(icon => {
    icon.classList.remove('fa-arrow-right');
    icon.classList.add('fa-arrow-left');
  });

  // Adiciona a classe 'fa-arrow-right' ao ícone da pergunta aberta
  if (!isAlreadyOpen) {
    icons[index].classList.add('fa-arrow-right');
    icons[index].classList.remove('fa-arrow-left');
  }
}

// Adiciona um ouvinte de eventos para cada pergunta
faqQuestions.forEach((question, index) => {
  question.addEventListener('click', () => {
    showFaqAnswer(index);
  });
});

// Mostra a resposta inicial (a primeira pergunta)
showFaqAnswer(0);
