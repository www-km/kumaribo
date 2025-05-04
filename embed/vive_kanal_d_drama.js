document.addEventListener('DOMContentLoaded', function() {
    // Datos de los episodios con URLs de embed
    const episodes = [
        {
            id: 1,
            title: "Vive Kanal D Drama",
            embedUrl: "https://www.youtube.com/embed/vVMRvv-8dWo"
        },
        {
            id: 2,
            title: "Vive Kanal D Drama",
            embedUrl: "https://drive.google.com/file/d/1Zop1p-txlaflgkmHCx8t-M4xoAyC2_cO/preview"
        }
        // Más episodios pueden ser agregados aquí con la misma estructura
    ];

    // Elementos del DOM
    const videoEmbed = document.getElementById('video-embed');
    const episodeTitle = document.getElementById('episode-title');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const episodesBtn = document.getElementById('episodes-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const episodesModal = document.getElementById('episodes-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const episodeSearch = document.getElementById('episode-search');
    const episodesList = document.getElementById('episodes-list');

    // Variables de estado
    let currentEpisodeIndex = 0;

    // Inicializar el reproductor
    function init() {
        // Cargar el primer episodio por defecto
        loadEpisode(currentEpisodeIndex);
        
        // Configurar event listeners
        setupEventListeners();
    }

    // Configurar los event listeners
    function setupEventListeners() {
        // Controles del reproductor
        prevBtn.addEventListener('click', playPreviousEpisode);
        nextBtn.addEventListener('click', playNextEpisode);
        fullscreenBtn.addEventListener('click', toggleFullscreen);
        episodesBtn.addEventListener('click', openEpisodesModal);
        closeModalBtn.addEventListener('click', closeEpisodesModal);
        
        // Buscador de episodios
        episodeSearch.addEventListener('input', searchEpisodes);
        
        // Controles de teclado
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT') return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    playPreviousEpisode();
                    break;
                case 'ArrowRight':
                    playNextEpisode();
                    break;
                case 'f':
                    toggleFullscreen();
                    break;
            }
        });
    }

    // Cargar un episodio
    function loadEpisode(index) {
        if (index < 0 || index >= episodes.length) return;
        
        currentEpisodeIndex = index;
        const episode = episodes[currentEpisodeIndex];
        
        // Actualizar la información del episodio
        episodeTitle.textContent = episode.title;
        
        // Cargar el embed
        videoEmbed.src = episode.embedUrl;
        
        // Actualizar los botones de navegación
        updateNavigationButtons();
    }

    // Reproducir episodio anterior
    function playPreviousEpisode() {
        if (currentEpisodeIndex > 0) {
            loadEpisode(currentEpisodeIndex - 1);
        }
    }

    // Reproducir siguiente episodio
    function playNextEpisode() {
        if (currentEpisodeIndex < episodes.length - 1) {
            loadEpisode(currentEpisodeIndex + 1);
        }
    }

    // Actualizar botones de navegación
    function updateNavigationButtons() {
        prevBtn.disabled = currentEpisodeIndex <= 0;
        nextBtn.disabled = currentEpisodeIndex >= episodes.length - 1;
    }

    // Alternar pantalla completa
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.querySelector('.video-wrapper').requestFullscreen().catch(err => {
                console.log(`Error al intentar pantalla completa: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    // Abrir modal de episodios
    function openEpisodesModal() {
        renderEpisodesList();
        episodesModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Cerrar modal de episodios
    function closeEpisodesModal() {
        episodesModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Renderizar lista de episodios
    function renderEpisodesList() {
        episodesList.innerHTML = '';
        
        episodes.forEach((episode, index) => {
            const episodeItem = document.createElement('div');
            episodeItem.className = `episode-item ${index === currentEpisodeIndex ? 'active' : ''}`;
            episodeItem.innerHTML = `
                <div>
                    <span class="episode-number">Ep. ${index + 1}</span>
                    ${episode.title}
                </div>
                <i class="fas fa-play"></i>
            `;
            
            episodeItem.addEventListener('click', () => {
                loadEpisode(index);
                closeEpisodesModal();
            });
            
            episodesList.appendChild(episodeItem);
        });
    }

    // Buscar episodios
    function searchEpisodes() {
        const searchTerm = episodeSearch.value.toLowerCase();
        const episodeItems = episodesList.querySelectorAll('.episode-item');
        
        episodeItems.forEach((item, index) => {
            const episode = episodes[index];
            const matches = episode.title.toLowerCase().includes(searchTerm);
            item.style.display = matches ? 'flex' : 'none';
        });
    }

    // Inicializar la aplicación
    init();
});
