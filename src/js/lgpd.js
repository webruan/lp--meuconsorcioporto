document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById('lgpd-btn'); 
  const modal = document.getElementById('lgpd-box');
  const close = document.getElementById('lgpd-close');

  function openModal() {
    modal.style.display = 'flex';
    button.style.opacity = 1;
  }

  function closeModal() {
    modal.style.display = 'none';
    button.style.opacity = '';
  }

  button.addEventListener('click', openModal);
  close.addEventListener('click', closeModal);

  openModal()
});
