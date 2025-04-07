const videoPlayer = document.getElementById("video-player");
const videoName = document.getElementById("video-name");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const pauseButton = document.getElementById("pause-button");

// Enlaces y nombres de los videos
const videos = [
  { name: "EPISODOIO 01", url: "https://pub-192f85bc3f094c9d8efa6b544fa8fba4.r2.dev/Devil%20May%20Cry%202025/S01/Devil%20May%20Cry%20-%201x01%20-%20Infierno.mp4" },
  { name: "EPISOIDIO 02", url: "https://pub-192f85bc3f094c9d8efa6b544fa8fba4.r2.dev/Devil%20May%20Cry%202025/S01/Devil%20May%20Cry%20-%201x02%20-%20Nuestra%20Se%C3%B1ora%20de%20los%20Dolores.mp4" },
  { name: "EPISOIDIO 03", url: "https://pub-192f85bc3f094c9d8efa6b544fa8fba4.r2.dev/Devil%20May%20Cry%202025/S01/Devil%20May%20Cry%20-%201x03%20-%20El%20camino%20profundo%20y%20salvaje.mp4" },
  { name: "EPISOIDIO 04", url: "https://pub-192f85bc3f094c9d8efa6b544fa8fba4.r2.dev/Devil%20May%20Cry%202025/S01/Devil%20May%20Cry%20-%201x04%20-%20Abandona%20toda%20esperanza.mp4" },
  { name: "EPISOIDIO 05", url: "https://pub-192f85bc3f094c9d8efa6b544fa8fba4.r2.dev/Devil%20May%20Cry%202025/S01/Devil%20May%20Cry%20-%201x05%20-%20El%20descenso.mp4" },
  { name: "EPISOIDIO 06", url: "https://pub-192f85bc3f094c9d8efa6b544fa8fba4.r2.dev/Devil%20May%20Cry%202025/S01/Devil%20May%20Cry%20-%201x06%20-%20El%20primer%20c%C3%ADrculo.mp4" },
  { name: "EPISOIDIO 07", url: "https://pub-192f85bc3f094c9d8efa6b544fa8fba4.r2.dev/Devil%20May%20Cry%202025/S01/Devil%20May%20Cry%20-%201x07%20-%20Ante%20las%20puertas%20del%20para%C3%ADso.mp4" },
  { name: "EPISOIDIO 08", url: "https://pub-192f85bc3f094c9d8efa6b544fa8fba4.r2.dev/Devil%20May%20Cry%202025/S01/Devil%20May%20Cry%20-%201x08%20-%20Un%20r%C3%ADo%20de%20sangre%20hirviente.mp4" }
];

let currentIndex = 0;

// Carga el video inicial
loadVideo(currentIndex);

function loadVideo(index) {
  videoPlayer.src = videos[index].url; // Asigna el enlace al reproductor
  videoName.textContent = videos[index].name; // Cambia el nombre del video mostrado
  videoPlayer.load(); // Asegúrate de cargar el nuevo video
  updateButtons(); // Actualiza el estado de los botones
}

function updateButtons() {
  prevButton.disabled = currentIndex === 0; // Deshabilita el botón "Anterior" si es el primer video
  nextButton.disabled = currentIndex === videos.length - 1; // Deshabilita "Siguiente" si es el último video
}

// Evento para el botón "Anterior"
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadVideo(currentIndex);
  }
});

// Evento para el botón "Siguiente"
nextButton.addEventListener("click", () => {
  if (currentIndex < videos.length - 1) {
    currentIndex++;
    loadVideo(currentIndex);
  }
});

// Evento para el botón "Pausa/Reanudar"
pauseButton.addEventListener("click", () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
});
