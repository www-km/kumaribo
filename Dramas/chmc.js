document.addEventListener('DOMContentLoaded', function() {
    // Datos de los episodios con múltiples servidores
    const episodes = [
        {
            id: 1,
            title: "Carrera Hacia Mi Corazon Episodio 01",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "Kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2001.mp4"}
            ],
            currentServerIndex: 0
        },
        {
            id: 2,
            title: "Carrera Hacia Mi Corazon Episodio 02",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
             
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2002.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 3,
            title: "Carrera Hacia Mi Corazon Episodio 03",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2003.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 4,
            title: "Carrera Hacia Mi Corazon Episodio 04",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2004.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 5,
            title: "Carrera Hacia Mi Corazon Episodio 05",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2005.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 6,
            title: "Carrera Hacia Mi Corazon Episodio 06",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2006.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 7,
            title: "Carrera Hacia Mi Corazon Episodio 07",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2007.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 8,
            title: "Carrera Hacia Mi Corazon Episodio 08",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2008.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 9,
            title: "Carrera Hacia Mi Corazon Episodio 09",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2009.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 10,
            title: "Carrera Hacia Mi Corazon Episodio 10",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2010.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 11,
            title: "Carrera Hacia Mi Corazon Episodio 11",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2011.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 12,
            title: "Carrera Hacia Mi Corazon Episodio 12",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2012.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 13,
            title: "Carrera Hacia Mi Corazon Episodio 13",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2013.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 14,
            title: "Carrera Hacia Mi Corazon Episodio 14",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2014.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 15,
            title: "Carrera Hacia Mi Corazon Episodio 15",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2015.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 16,
            title: "Carrera Hacia Mi Corazon Episodio 16",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2016.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 17,
            title: "Carrera Hacia Mi Corazon Episodio 17",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2017.mp4" }
            ],
            currentServerIndex: 0
        },
        {
            id: 18,
            title: "Carrera Hacia Mi Corazon Episodio 18",
            description: "No inf.",
            image: "https://static-v1.mydramawave.com/vt/prod/cover/bb730019-9ef8-42a4-91e0-ee5970b45e4d.jpg?image_process=quality,85/resize,w_600/format,webp",
            servers: [
                { name: "kumaribo", url: "https://file.garden/aDOvWp9BNFHMB4ac/Carrera%20hacia%20Mi%20Coraz%C3%B3n%20Capitulo%2018.mp4" }
            ],
            currentServerIndex: 0
        }
    ];

    // Elementos del DOM
    const videoElement = document.getElementById('video-element');
    const episodeTitle = document.getElementById('episode-title');
    const episodeNumber = document.getElementById('episode-number');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const episodesBtn = document.getElementById('episodes-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const serverBtn = document.getElementById('server-btn');
    const episodesModal = document.getElementById('episodes-modal');
    const serverModal = document.getElementById('server-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const closeServerModalBtn = document.getElementById('close-server-modal');
    const episodeSearch = document.getElementById('episode-search');
    const episodesList = document.getElementById('episodes-list');
    const serverList = document.getElementById('server-list');
    const episodesGrid = document.getElementById('episodes-grid');
    const videoWrapper = document.querySelector('.video-wrapper');
    const videoSection = document.querySelector('.video-section');
    const resizeHandle = document.createElement('div');
    
    // Crear handle para redimensionar
    resizeHandle.className = 'resize-handle';
    videoSection.appendChild(resizeHandle);

    // Variables de estado
    let currentEpisodeIndex = 0;
    let isChangingEpisode = false;
    let isDragging = false;
    let startX, startWidth;

    // Inicializar el reproductor
    function init() {
        // Configurar el elemento de video
        videoElement.controls = true;
        videoElement.preload = 'auto';
        
        // Cargar el primer episodio por defecto
        loadEpisode(currentEpisodeIndex);
        
        // Renderizar la cuadrícula de episodios
        renderEpisodesGrid();
        
        // Configurar event listeners
        setupEventListeners();
    }

    // Configurar los event listeners
    function setupEventListeners() {
        // Controles del reproductor
        playPauseBtn.addEventListener('click', togglePlayPause);
        prevBtn.addEventListener('click', playPreviousEpisode);
        nextBtn.addEventListener('click', playNextEpisode);
        fullscreenBtn.addEventListener('click', toggleFullscreen);
        episodesBtn.addEventListener('click', openEpisodesModal);
        serverBtn.addEventListener('click', openServerModal);
        closeModalBtn.addEventListener('click', closeEpisodesModal);
        closeServerModalBtn.addEventListener('click', closeServerModal);
        
        // Buscador de episodios
        episodeSearch.addEventListener('input', searchEpisodes);
        
        // Eventos del video
        videoElement.addEventListener('play', updatePlayPauseIcon);
        videoElement.addEventListener('pause', updatePlayPauseIcon);
        videoElement.addEventListener('loadeddata', handleVideoLoaded);
        videoElement.addEventListener('error', handleVideoError);
        videoElement.addEventListener('waiting', handleVideoWaiting);
        videoElement.addEventListener('playing', handleVideoPlaying);
        
        // Cerrar modales al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (episodesModal.classList.contains('active') && !episodesModal.contains(e.target) && e.target !== episodesBtn) {
                closeEpisodesModal();
            }
            if (serverModal.classList.contains('active') && !serverModal.contains(e.target) && e.target !== serverBtn) {
                closeServerModal();
            }
        });
        
        // Controles de teclado
        document.addEventListener('keydown', handleKeyDown);
        
        // Redimensionamiento del contenedor de video
        resizeHandle.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);
    }

    // Manejador para iniciar el redimensionamiento
    function startDrag(e) {
        isDragging = true;
        startX = e.clientX;
        startWidth = parseInt(document.defaultView.getComputedStyle(videoSection).width, 10);
        e.preventDefault();
    }

    // Manejador para el redimensionamiento
    function drag(e) {
        if (!isDragging) return;
        const width = startWidth + e.clientX - startX;
        videoSection.style.width = `${Math.max(300, Math.min(window.innerWidth - 100, width))}px`;
    }

    // Manejador para finalizar el redimensionamiento
    function endDrag() {
        isDragging = false;
    }

    // Alternar play/pausa
    function togglePlayPause() {
        if (videoElement.paused) {
            videoElement.play().catch(e => console.log('Error al reproducir:', e));
        } else {
            videoElement.pause();
        }
    }

    // Actualizar icono de play/pausa
    function updatePlayPauseIcon() {
        playPauseBtn.innerHTML = videoElement.paused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
    }

    // Manejador de teclado
    function handleKeyDown(e) {
        if (e.target.tagName === 'INPUT') return;
        
        switch(e.key) {
            case ' ':
                togglePlayPause();
                break;
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
            case 'e':
            case 'E':
                openEpisodesModal();
                break;
        }
    }

    // Manejadores de eventos del video
    function handleVideoLoaded() {
        isChangingEpisode = false;
    }

    function handleVideoError() {
        console.error('Error al cargar el video');
        isChangingEpisode = false;
    }

    function handleVideoWaiting() {
        // Mostrar spinner de carga si es necesario
    }

    function handleVideoPlaying() {
        // Ocultar spinner de carga si es necesario
    }

    // Cargar un episodio
    function loadEpisode(index) {
        if (index < 0 || index >= episodes.length || isChangingEpisode) return;
        
        isChangingEpisode = true;
        currentEpisodeIndex = index;
        const episode = episodes[currentEpisodeIndex];
        
        // Actualizar la información del episodio
        episodeTitle.textContent = episode.title;
        episodeNumber.textContent = toRomanNumeral(episode.id);
        
        // Detener y limpiar el video actual
        videoElement.pause();
        videoElement.src = '';
        videoElement.load();
        
        // Cargar el servidor actual
        loadCurrentServer();
        
        // Actualizar los botones de navegación
        updateNavigationButtons();
    }

    // Convertir número a romano
    function toRomanNumeral(num) {
        const roman = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII'];
        return roman[num] || num;
    }

    // Cargar el servidor actual del episodio actual
    function loadCurrentServer() {
        const episode = episodes[currentEpisodeIndex];
        const server = episode.servers[episode.currentServerIndex];
        
        if (server.url) {
            videoElement.src = server.url;
            videoElement.load();
            videoElement.play().catch(e => console.log('Autoplay no permitido:', e));
        } else {
            console.error('URL del servidor no disponible');
            isChangingEpisode = false;
        }
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
            videoWrapper.requestFullscreen().catch(err => {
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
        // Enfocar el buscador al abrir el modal
        setTimeout(() => episodeSearch.focus(), 100);
    }

    // Cerrar modal de episodios
    function closeEpisodesModal() {
        episodesModal.classList.remove('active');
        document.body.style.overflow = '';
        // Limpiar búsqueda al cerrar
        episodeSearch.value = '';
        searchEpisodes();
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
                    <span class="episode-number">${toRomanNumeral(index + 1)}</span>
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

    // Renderizar cuadrícula de episodios
    function renderEpisodesGrid() {
        episodesGrid.innerHTML = '';
        
        episodes.forEach((episode, index) => {
            const episodeCard = document.createElement('div');
            episodeCard.className = 'episode-card';
            episodeCard.innerHTML = `
                <img src="${episode.image}" alt="${episode.title}" class="episode-image">
                <div class="episode-info-card">
                    <div class="episode-number-card">${toRomanNumeral(index + 1)}</div>
                    <div class="episode-title-card">${episode.title}</div>
                </div>
            `;
            
            episodeCard.addEventListener('click', () => {
                loadEpisode(index);
                // Desplazar hacia el reproductor en móviles
                if (window.innerWidth <= 1024) {
                    document.querySelector('.video-section').scrollIntoView({ behavior: 'smooth' });
                }
            });
            
            episodesGrid.appendChild(episodeCard);
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
                    <span class="episode-number">${toRomanNumeral(index + 1)}</span>
                    ${server.name}
                </div>
                <i class="fas fa-server"></i>
            `;
            
            serverItem.addEventListener('click', () => {
                if (!isChangingEpisode) {
                    episode.currentServerIndex = index;
                    loadCurrentServer();
                    closeServerModal();
                }
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
            const matches = episode.title.toLowerCase().includes(searchTerm) || 
                          episode.description.toLowerCase().includes(searchTerm) ||
                          toRomanNumeral(index + 1).toLowerCase().includes(searchTerm);
            item.style.display = matches ? 'flex' : 'none';
        });
    }

    // Inicializar la aplicación
    init();
});
