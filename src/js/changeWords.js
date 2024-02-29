function updateMobileContent() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 475) {
    const span01 = document.getElementById('change-mobile-01');
    const span02 = document.getElementById('change-mobile-02');

    if (span01) {
      span01.textContent = 'abaixo';
    }

    if (span02) {
      span02.textContent = 'abaixo';
    }
  } else {
    // Restaurar o conteúdo original se a largura da tela for maior ou igual a 475px
    const span01 = document.getElementById('change-mobile-01');
    const span02 = document.getElementById('change-mobile-02');

    if (span01) {
      span01.textContent = 'ao lado';
    }

    if (span02) {
      span02.textContent = 'ao lado';
    }
  }
}

// Chamar a função ao carregar a página e sempre que a largura da tela mudar
updateMobileContent();
window.addEventListener('resize', updateMobileContent);
