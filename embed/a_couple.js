document.addEventListener('DOMContentLoaded', function() {
    // Datos de los episodios con múltiples servidores
    const episodes = [
        {
            id: 1,
            title: "Episodio 01",
            servers: [
                { name: "kumaribo", url: "https://mpl4y.alejandro-94210.workers.dev/0:/A.D.ESTRENO/0.Cl%C3%A1sicos/17.ACoupleCuckoos%20-%20122587/S01/A%20Couple%20of%20Cuckoos%20-%201x01%20-%20Episodio%201.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 2,
            title: "Episodio 02",
            servers: [
                { name: "kumaribo", url: "https://mpl4y.alejandro-94210.workers.dev/0:/A.D.ESTRENO/0.Cl%C3%A1sicos/17.ACoupleCuckoos%20-%20122587/S01/A%20Couple%20of%20Cuckoos%20-%201x02%20-%20Episodio%202.mp4" }
            ],
            currentServerIndex: 0
        },
                {
            id: 3,
            title: "Episodio 03",
            servers: [
                { name: "kumaribo", url: "https://mpl4y.alejandro-94210.workers.dev/0:/A.D.ESTRENO/0.Cl%C3%A1sicos/17.ACoupleCuckoos%20-%20122587/S01/A%20Couple%20of%20Cuckoos%20-%201x03%20-%20Episodio%203.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 4,
            title: "Episodio 04",
            servers: [
                { name: "Google Drive", url: "" }
            ],
            currentServerIndex: 0
        },        {
            id: 5,
            title: "Episodio 05",
            servers: [
                { name: "kumaribo", url: "" }
            ],
            currentServerIndex: 0
        },
        {
            id: 6,
            title: "Episodio 06",
            servers: [
                { name: "Google Drive", url: "" }
            ],
            currentServerIndex: 0
        },        {
            id: 7,
            title: "Episodio 07",
            servers: [
                { name: "kumaribo", url: "" }
            ],
            currentServerIndex: 0
        },
        {
            id: 8,
            title: "Episodio 08",
            servers: [
                { name: "Google Drive", url: "" }
            ],
            currentServerIndex: 0
        },        {
            id: 9,
            title: "Episodio 09",
            servers: [
                { name: "kumaribo", url: "" }
            ],
            currentServerIndex: 0
        },
        {
            id: 10,
            title: "Episodio 10",
            servers: [
                { name: "Google Drive", url: "" }
            ],
            currentServerIndex: 0
        },        {
            id: 11,
            title: "Episodio 11",
            servers: [
                { name: "kumaribo", url: "" }
            ],
            currentServerIndex: 0
        },
        {
            id: 12,
            title: "Episodio 12",
            servers: [
                { name: "Google Drive", url: "" }
            ],
            currentServerIndex: 0
        },        {
            id: 13,
            title: "Episodio 13",
            servers: [
                { name: "kumaribo", url: "" }
            ],
            currentServerIndex: 0
        },
        {
            id: 14,
            title: "Episodio 14",
            servers: [
                { name: "Google Drive", url: "" }
            ],
            currentServerIndex: 0
        },        {
            id: 15,
            title: "Episodio 15",
            servers: [
                { name: "kumaribo", url: "" }
            ],
            currentServerIndex: 0
        },
        {
            id: 16,
            title: "Episodio 16",
            servers: [
                { name: "Google Drive", url: "" }
            ],
            currentServerIndex: 0
        },        {
            id: 17,
            title: "Episodio 17",
            servers: [
                { name: "kumaribo", url: "" }
            ],
            currentServerIndex: 0
        },
        {
            id: 18,
            title: "Episodio 18",
            servers: [
                { name: "Google Drive", url: "" }
            ],
            currentServerIndex: 0
        },        {
            id: 19,
            title: "Episodio 19",
            servers: [
                { name: "kumaribo", url: "" }
            ],
            currentServerIndex: 0
        },
        {
            id: 20,
            title: "Episodio 20",
            servers: [
                { name: "Google Drive", url: "" }
            ],
            currentServerIndex: 0
        },        {
            id: 21,
            title: "Episodio 21",
            servers: [
                { name: "kumaribo", url: "" }
            ],
            currentServerIndex: 0
        },
        {
            id: 22,
            title: "Episodio 22",
            servers: [
                { name: "Google Drive", url: "" }
            ],
            currentServerIndex: 0
        },        {
            id: 23,
            title: "Episodio 23",
            servers: [
                { name: "kumaribo", url: "" }
            ],
            currentServerIndex: 0
        },
        {
            id: 24,
            title: "Episodio 24",
            servers: [
                { name: "Google Drive", url: "" }
            ],
            currentServerIndex: 0
        }
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
