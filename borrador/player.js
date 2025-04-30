document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (debes reemplazar con tus contenidos reales)
    const contents = [
        {
            id: 1,
            title: "Ejemplo de Contenido 1",
            videoSources: [
                { resolution: "Servidor HD 1280x688", iframeUrl: "https://ia801307.us.archive.org/12/items/el-huesped-gwoemul-2006-en-espanol-latino/El%20Huesped%20Gwoemul%20%282006%29%20en%20Espa%C3%B1ol%20Latino.mp4" },
                { resolution: "Servidor SD", iframeUrl: "https://swiftplayers.com/e/nyhhnbekvxpw" },
                { resolution: "Ok.ru", iframeUrl: "https://ok.ru/videoembed/952805034643"},
                { resolution: "new", iframeUrl: "https://hqq.ac/e/MUNYcVZiblN3N2xMNU0zUzFuck83Zz09"},
                { resolution: "VidHide", iframeUrl: "https://vidhidehub.com/embed/k3x7wclp3xyl"},
                { resolution: "StreamWish", iframeUrl: "https://hlswish.com/e/vzaqi2iqcoa7"},
                { resolution: "Dailymotion", iframeUrl: "https://geo.dailymotion.com/player.html?video=x99bn98"}
            ],
            audioLanguage: "Español",
            subtitleLanguage: "Inglés"
        },
        {
            id: 2,
            title: "Animekai",
            videoSources: [
                { resolution: "Servidor Premium", iframeUrl: "https://megaup.cc/e/jpbgZjnzWS2JcOLxFLND5xHpCQ" },
                { resolution: "Servidor Backup", iframeUrl: "https://ejemplo-backup.com/embed/2" }
            ],
            audioLanguage: "Español",
            subtitleLanguage: null
        }
    ];

    // Elementos del DOM
    const videoContainer = document.getElementById('video-container');
    const videoPlaceholder = videoContainer.querySelector('.video-placeholder');
    const episodeTitle = document.getElementById('episode-title');
    const audioTrack = document.getElementById('audio-track');
    const subtitleTrack = document.getElementById('subtitle-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const episodesBtn = document.getElementById('episodes-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const serverSelect = document.getElementById('server-select');
    const episodesModal = document.getElementById('episodes-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const episodeSearch = document.getElementById('episode-search');
    const episodesList = document.getElementById('episodes-list');

    // Variables de estado
    let currentContentIndex = 0;
    let currentIframe = null;
    let currentServer = null;
    let sandboxAttempted = false; // Bandera para controlar intentos con sandbox

    // Inicializar el reproductor
    function init() {
        loadContent(currentContentIndex);
        setupEventListeners();
        renderContentsList();
    }

    // Configurar event listeners
    function setupEventListeners() {
        prevBtn.addEventListener('click', playPreviousContent);
        nextBtn.addEventListener('click', playNextContent);
        fullscreenBtn.addEventListener('click', toggleFullscreen);
        episodesBtn.addEventListener('click', openContentsModal);
        closeModalBtn.addEventListener('click', closeContentsModal);
        serverSelect.addEventListener('change', changeServer);
        episodeSearch.addEventListener('input', searchContents);
        document.addEventListener('keydown', handleKeyboardShortcuts);
    }

    // Cargar contenido
    function loadContent(index) {
        if (index < 0 || index >= contents.length) return;
        
        currentContentIndex = index;
        const content = contents[currentContentIndex];
        
        // Actualizar información del contenido
        episodeTitle.textContent = content.title;
        audioTrack.textContent = content.audioLanguage;
        subtitleTrack.textContent = content.subtitleLanguage || 'Sin subtítulos';
        
        // Configurar selector de servidores
        setupServerSelector(content.videoSources);
        
        // Cargar el iframe con el primer servidor disponible
        currentServer = content.videoSources[0];
        sandboxAttempted = false; // Resetear la bandera al cargar nuevo contenido
        loadIframe(currentServer.iframeUrl);
    }

    // Cargar iframe con manejo de errores
    function loadIframe(url) {
        // Limpiar iframe anterior si existe
        if (currentIframe) {
            videoContainer.removeChild(currentIframe);
            currentIframe = null;
        }
        
        // Ocultar placeholder
        videoPlaceholder.style.display = 'none';
        
        // Crear nuevo iframe
        currentIframe = document.createElement('iframe');
        currentIframe.src = url;
        currentIframe.setAttribute('allowfullscreen', '');
        currentIframe.setAttribute('frameborder', '0');
        currentIframe.setAttribute('scrolling', 'no');
        
        // Intentar primero con sandbox, a menos que ya hayamos fallado antes
        if (!sandboxAttempted) {
            currentIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-presentation allow-popups');
        }
        
        // Estilos
        Object.assign(currentIframe.style, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            border: 'none'
        });
        
        // Manejar errores del iframe
        currentIframe.onload = function() {
            // Verificar si el iframe está bloqueado por sandbox
            try {
                // Intentar acceder a algo dentro del iframe
                if (currentIframe.contentWindow && currentIframe.contentWindow.document) {
                    // Si llegamos aquí, el sandbox funciona
                    sandboxAttempted = false;
                }
            } catch (e) {
                // Si hay un error, probablemente sea por sandbox
                if (!sandboxAttempted) {
                    sandboxAttempted = true;
                    // Volver a cargar sin sandbox
                    loadIframe(url);
                    return;
                }
            }
        };
        
        currentIframe.onerror = function() {
            if (!sandboxAttempted) {
                sandboxAttempted = true;
                // Volver a cargar sin sandbox
                loadIframe(url);
                return;
            }
            // Si ya intentamos sin sandbox y sigue fallando
            videoPlaceholder.style.display = 'flex';
            console.error('Error al cargar el iframe');
        };
        
        videoContainer.appendChild(currentIframe);
        updateNavigationButtons();
    }

    // Configurar selector de servidores
    function setupServerSelector(sources) {
        serverSelect.innerHTML = sources.map(source => 
            `<option value="${source.resolution}">${source.resolution}</option>`
        ).join('');
    }

    // Cambiar servidor
    function changeServer() {
        const selectedResolution = serverSelect.value;
        const content = contents[currentContentIndex];
        const source = content.videoSources.find(s => s.resolution === selectedResolution);
        
        if (source) {
            currentServer = source;
            sandboxAttempted = false; // Resetear la bandera al cambiar servidor
            loadIframe(source.iframeUrl);
        }
    }

    // Navegación entre contenidos
    function playPreviousContent() {
        if (currentContentIndex > 0) {
            loadContent(currentContentIndex - 1);
        }
    }

    function playNextContent() {
        if (currentContentIndex < contents.length - 1) {
            loadContent(currentContentIndex + 1);
        }
    }

    function updateNavigationButtons() {
        prevBtn.disabled = currentContentIndex <= 0;
        nextBtn.disabled = currentContentIndex >= contents.length - 1;
    }

    // Pantalla completa
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            videoContainer.requestFullscreen().catch(err => {
                console.error('Error al intentar pantalla completa:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }

    // Modal de lista de contenidos
    function openContentsModal() {
        episodesModal.classList.add('active');
        episodeSearch.focus();
    }

    function closeContentsModal() {
        episodesModal.classList.remove('active');
    }

    function renderContentsList() {
        episodesList.innerHTML = contents.map((content, index) => `
            <div class="episode-item ${index === currentContentIndex ? 'active' : ''}" data-index="${index}">
                <div class="episode-info">
                    <span class="episode-number">${index + 1}</span>
                    <span class="episode-title">${content.title}</span>
                </div>
                <i class="fas fa-play play-icon"></i>
            </div>
        `).join('');
        
        episodesList.querySelectorAll('.episode-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.dataset.index);
                loadContent(index);
                closeContentsModal();
            });
        });
    }

    function searchContents() {
        const term = episodeSearch.value.toLowerCase();
        episodesList.querySelectorAll('.episode-item').forEach(item => {
            const index = parseInt(item.dataset.index);
            const matches = contents[index].title.toLowerCase().includes(term);
            item.style.display = matches ? 'flex' : 'none';
        });
    }

    // Atajos de teclado
    function handleKeyboardShortcuts(e) {
        if (e.target.tagName === 'INPUT') return;
        
        switch(e.key) {
            case 'ArrowLeft':
                playPreviousContent();
                break;
            case 'ArrowRight':
                playNextContent();
                break;
            case 'f':
                toggleFullscreen();
                break;
            case 'Escape':
                closeContentsModal();
                break;
        }
    }

    // Inicializar
    init();
});

