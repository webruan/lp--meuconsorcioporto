// Seleciona o elemento HTML com o ID 'hero' e o armazena na variável 'hero'.
const hero = document.getElementById('hero');

// Função que verifica se a seção hero está visível na tela
function isHeroVisible(el) { // Declaração de função chamada 'isHeroVisible' que aceita um argumento 'el'.
  const { top, bottom, left, right } = el.getBoundingClientRect(); // Usa 'getBoundingClientRect()' para obter as coordenadas do retângulo do elemento na janela.
  // Obtém as dimensões da janela do navegador.
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  // Verifica se o elemento está verticalmente visível na tela.
  const vertInView = (top <= windowHeight) && (bottom >= 0);
  // Verifica se o elemento está horizontalmente visível na tela.
  const horInView = (left <= windowWidth) && (right >= 0);
  // Retorna verdadeiro se o elemento estiver visível tanto vertical quanto horizontalmente.
  return vertInView && horInView;
}

// Função que carrega as imagens nos respectivos containers
function loadImages() { // Declaração da função 'loadImages'.
  if (isHeroVisible(hero)) { // Verifica se a seção 'hero' está visível na tela.
    const imagePaths = [ // Declaração do array 'imagePaths' que vai conter todas as imagens da página.
      // Define um objeto com as informações da imagem.
      {
        imgNameId: 'chance-graph', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'banner', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'options-rebuild', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'options-home', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'options-build', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'options-apartment', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'options-terrain', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'options-commerce', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'options-car', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'options-apartment-2', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'options-porto', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'video-what', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'video-benefits', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'video-steps', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'video-miths', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'video-advantages', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'benefits-money', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'benefits-people', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'benefits-wave', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'steps-arrow-right', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'steps-arrow-down', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'steps-arrow-up', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'feedback-people', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'difference-house', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'difference-building', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'faq-question', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'immobile-room', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'footer-logo-aguia', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'footer-logo-porto', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'facebook', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'instagram', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
    ];

    // Loop que itera sobre cada elemento do array 'imagePaths'.
    imagePaths.forEach(imagePath => {
      const imgContainer = document.getElementById(imagePath.imgNameId); // Seleciona o elemento com o ID correspondente ao 'imgNameId' do objeto.
      
      // Verifica se o elemento foi encontrado.
      if (imgContainer) {
        imgContainer.innerHTML = // Define o conteúdo HTML do elemento selecionado.
        `
          <picture>
            <source media="(min-width: 1200px)" srcset="./src/assets/images/desktop/${imagePath.imgNameId}.webp">
            <source media="(min-width: 768px)" srcset="./src/assets/images/tablet/${imagePath.imgNameId}.webp">
            <source media="(min-width: 320px)" srcset="./src/assets/images/mobile/${imagePath.imgNameId}.webp">
            <img loading="lazy" src="./src/assets/images/desktop/${imagePath.imgNameId}.webp" alt="${imagePath.altText}">
          </picture>
        `;
      }
    });

    // Remove o ouvinte de eventos de rolagem após as imagens serem carregadas.
    window.removeEventListener('scroll', loadImages);
  }
}

// Adiciona um ouvinte de eventos de rolagem para chamar a função 'loadImages'.
window.addEventListener('scroll', loadImages);