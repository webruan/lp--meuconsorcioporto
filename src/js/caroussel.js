const column1 = document.getElementById('column-01');
const column2 = document.getElementById('column-02');
const rowHeight = 102; // Defina a altura de cada linha (row) para ajustar o deslocamento
const slideInterval = 4000; // Defina o intervalo de tempo entre os slides (em milissegundos)

// Função para gerar um elemento de linha (row) com base no texto e ID da imagem
function createRowElement(text, imageId) {
  const row = document.createElement('div');
  row.classList.add('row');

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img');
  imgDiv.id = imageId;

  const pElement = document.createElement('p');
  pElement.textContent = text;

  row.appendChild(imgDiv);
  row.appendChild(pElement);

  return row;
}

// Função para mover os itens para baixo e reaparecer no topo
function slideItemsUp(column1) {
  const rows = column1.querySelectorAll('.row');

  // Adiciona a classe fade-out aos elementos que estão saindo do topo
  rows[0].classList.add('fade-out');

  // Move os itens para baixo
  column1.style.transition = 'transform 2s ease-in';
  column1.style.transform = `translateY(-${rowHeight}px)`;

  // Aguarda um curto intervalo para que a transição termine
  setTimeout(() => {
    // Remove a classe fade-out e o elemento do topo da coluna
    rows[0].classList.remove('fade-out');
    rows[0].remove();

    // Remove a transição para que possamos reposicionar os itens sem animação
    column1.style.transition = 'none';

    // Move o primeiro item para o final da coluna
    const firstRow = rows[0];
    column1.appendChild(firstRow.cloneNode(true));
    firstRow.remove();

    // Adiciona a classe fade-in ao novo item recém-adicionado
    const newRow = column1.lastElementChild;
    newRow.classList.add('fade-in');

    // Reposiciona a coluna para a posição original (sem o translateY)
    column1.style.transform = 'translateY(0)';

    // Remove a classe fade-in após um curto período de tempo para a animação ser repetida
    setTimeout(() => {
      newRow.classList.remove('fade-in');
    }, 1000); // Tempo da animação em milissegundos
  }, 1000);
}

// Função para mover os itens para baixo e reaparecer no topo
function slideItemsDown(column2) {
  const rows = column2.querySelectorAll('.row');

  // Adiciona a classe fade-out aos elementos que estão saindo do topo
  rows[3].classList.add('fade-out');

  // Move os itens para baixo
  column2.style.transition = 'transform 2s ease-in';
  column2.style.transform = `translateY(${rowHeight}px)`;

  // Aguarda um curto intervalo para que a transição termine
  setTimeout(() => {
    // Remove a classe fade-out e o elemento do topo da coluna
    rows[3].classList.remove('fade-out');
    rows[3].remove();

    // Remove a transição para que possamos reposicionar os itens sem animação
    column2.style.transition = 'none';

    // Move o primeiro item para o final da coluna
    const firstRow = rows[3];
    column2.appendChild(firstRow.cloneNode(true));
    firstRow.remove();

    // Adiciona a classe fade-in ao novo item recém-adicionado
    const newRow = column2.firstElementChild;
    newRow.classList.add('fade-in');

    // Reposiciona a coluna para a posição original (sem o translateY)
    column2.style.transform = 'translateY(0)';

    // Remove a classe fade-in após um curto período de tempo para a animação ser repetida
    setTimeout(() => {
      newRow.classList.remove('fade-in');
    }, 1000); // Tempo da animação em milissegundos
  }, 1000);
}

// Função para iniciar o slider
function startSliderUp(column1) {
  // Gera os elementos iniciais da coluna utilizando os elementos já presentes no HTML
  const rows = column1.querySelectorAll('.row');
  rows.forEach(row => {
    const text = row.querySelector('p').textContent;
    const imageId = row.querySelector('.img').id;
    const newRow = createRowElement(text, imageId);
    column1.appendChild(newRow);
    row.remove();
  });

  // Chama a função para mover os itens a cada intervalo de tempo definido
  setInterval(() => slideItemsUp(column1), slideInterval);
}

// Função para iniciar o slider
function startSliderDown(column2) {
  // Gera os elementos iniciais da coluna utilizando os elementos já presentes no HTML
  const rows = column2.querySelectorAll('.row');
  rows.forEach(row => {
    const text = row.querySelector('p').textContent;
    const imageId = row.querySelector('.img').id;
    const newRow = createRowElement(text, imageId);
    column2.appendChild(newRow);
    row.remove();
  });

  // Chama a função para mover os itens a cada intervalo de tempo definido
  setInterval(() => slideItemsDown(column2), slideInterval);
}
// Utilitário para verificar se um elemento está visível no viewport
function isVisible(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para iniciar o slider quando as colunas estiverem visíveis
function initSliderWhenVisible() {
  if (isVisible(column1)) {
    startSliderUp(column1);
    startSliderDown(column2);
  }
}

startSliderUp(column1);
startSliderDown(column2);