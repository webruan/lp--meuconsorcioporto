document.addEventListener("DOMContentLoaded", function() {
  // Identifique os elementos relevantes no HTML
  const mainVideo = document.getElementById('mainVideo');
  const titleWatching = document.getElementById('titleWatching');
  const descWatching = document.getElementById('descWatching');
  const thumbnails = document.querySelectorAll('.video_thumbnail');

  window.addEventListener('scroll', function() {
    mainVideo.src = 'https://www.youtube.com/embed/ztim5vJm5F0';  
  });

  // Função para exibir o vídeo principal e informações associadas
  function showVideo(event) {
    const clickedThumbnail = event.currentTarget;
    const videoTitle = clickedThumbnail.dataset.title;
    const videoDesc = clickedThumbnail.dataset.desc;
    const videoSrc = clickedThumbnail.dataset.src; // Adicione o atributo data-src com o link do vídeo em cada miniatura

    // Atualize o conteúdo do vídeo principal e informações associadas
    mainVideo.src = videoSrc;
    titleWatching.textContent = videoTitle;
    descWatching.textContent = videoDesc;

    // Oculte a miniatura clicada (vídeo principal) e exiba novamente as outras miniaturas
    thumbnails.forEach(thumbnail => {
      thumbnail.style.display = thumbnail === clickedThumbnail ? 'none' : 'flex';
    });

    // Exiba o vídeo principal
    mainVideo.style.display = 'flex';
  }

  // Adicione o evento de clique a cada miniatura
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', showVideo);
  });
});
