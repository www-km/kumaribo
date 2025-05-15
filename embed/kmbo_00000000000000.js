document.addEventListener('DOMContentLoaded', function() {
    // Datos de los episodios con múltiples servidores
    const episodes = [
        {
            id: 1,
            title: "Episodio 01",
            servers: [
            { name: "VidHide", url: "https://movearnpre.com/embed/kr5n3nrxlts6" }
            ],
            currentServerIndex: 0
        },
        {
            id: 2,
            title: "Episodio 02",
            servers: [
            { name: "Vidhidepre", url: "https://movearnpre.com/embed/uertg3fh73ml" }
            ],
            currentServerIndex: 0
        },
        {
            id: 3,
            title: "Episodio 03",
            servers: [
            { name: "Vidhidepre", url: "https://movearnpre.com/embed/w8e6m3nuh2ig" }
            ],
            currentServerIndex: 0
        },
        {
            id: 4,
            title: "Episodio 04",
            servers: [
            { name: "Vidhidepre", url: "https://movearnpre.com/embed/daxafdf5zpxc" }
            ],
            currentServerIndex: 0
        },
        {
            id: 5,
            title: "Episodio 05",
            servers: [
            { name: "Vidhidepre", url: "https://movearnpre.com/embed/ewjj0f99hw4m" }
            ],
            currentServerIndex: 0
        },
        {
            id: 6,
            title: "Episodio 06",
            servers: [
            { name: "Vidhidepre", url: "https://movearnpre.com/embed/wam1wn2dbrs8" }
            ],
            currentServerIndex: 0
        },
        {
            id: 7,
            title: "Episodio 07",
            servers: [
            { name: "Vidhidepre", url: "https://movearnpre.com/embed/omv9czvkq7dg" }
            ],
            currentServerIndex: 0
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
    const serverBtn = document.getElementById('server-btn');
    const episodesModal = document.getElementById('episodes-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const episodeSearch = document.getElementById('episode-search');
    const episodesList = document.getElementById('episodes-list');

    // Crear modal de servidores dinámicamente
    const serverModal = document.createElement('div');
    serverModal.className = 'modal server-modal';
    serverModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" id="close-server-modal">&times;</span>
            <h2>Seleccionar Servidor</h2>
            <div id="server-list" class="episodes-list"></div>
        </div>
    `;
    document.body.appendChild(serverModal);
    const closeServerModalBtn = document.getElementById('close-server-modal');
    const serverList = document.getElementById('server-list');

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
        serverBtn.addEventListener('click', openServerModal);
        closeModalBtn.addEventListener('click', closeEpisodesModal);
        closeServerModalBtn.addEventListener('click', closeServerModal);
        
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
                case 'F':
                    toggleFullscreen();
                    break;
                case 's':
                case 'S':
                    openServerModal();
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
        
        // Cargar el embed del servidor actual
        loadCurrentServer();
        
        // Actualizar los botones de navegación
        updateNavigationButtons();
    }

    // Cargar el servidor actual del episodio actual
    function loadCurrentServer() {
        const episode = episodes[currentEpisodeIndex];
        const server = episode.servers[episode.currentServerIndex];
        videoEmbed.src = server.url;
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

    // Abrir modal de servidores
    function openServerModal() {
        renderServerList();
        serverModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Cerrar modal de servidores
    function closeServerModal() {
        serverModal.classList.remove('active');
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

    // Renderizar lista de servidores
    function renderServerList() {
        serverList.innerHTML = '';
        
        const episode = episodes[currentEpisodeIndex];
        
        episode.servers.forEach((server, index) => {
            const serverItem = document.createElement('div');
            serverItem.className = `episode-item ${index === episode.currentServerIndex ? 'active' : ''}`;
            serverItem.innerHTML = `
                <div>
                    <span class="episode-number">${index + 1}</span>
                    ${server.name}
                </div>
                <i class="fas fa-server"></i>
            `;
            
            serverItem.addEventListener('click', () => {
                episode.currentServerIndex = index;
                loadCurrentServer();
                closeServerModal();
            });
            
            serverList.appendChild(serverItem);
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

    // Función opcional para verificar disponibilidad de servidores
    async function checkServerAvailability(url) {
        try {
            const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
            return true;
        } catch (error) {
            return false;
        }
    }

    // Función opcional para encontrar el mejor servidor disponible
    async function findBestServer(episodeIndex) {
        const episode = episodes[episodeIndex];
        
        for (let i = 0; i < episode.servers.length; i++) {
            const isAvailable = await checkServerAvailability(episode.servers[i].url);
            if (isAvailable) {
                episode.currentServerIndex = i;
                return i;
            }
        }
        
        return -1; // Ningún servidor disponible
    }

    // Inicializar la aplicación
    init();
});
