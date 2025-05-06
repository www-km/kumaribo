document.addEventListener('DOMContentLoaded', function() {
    // Datos de los episodios con URLs para video y subtítulos
    const episodes = [
        {
            id: 1,
            title: "CINE DE HORROR",
            videoSources: [
                { resolution: "AUTO", url: "https://tinyurl.com/292pe4er" },
                { resolution: "480p", url: "https://mdstrm.com/live-stream/574463697b9817cf0886fc17?jsapi=true&autoplay=true&access_token=WjrysS4kQRvkmOtfIyN5uov512BOF9cBrAG8j4lw0vqFZfZw2Eua206uk05zQxpV5V5XGeUyUUo&controls_bar[showFullscreen]=true" }/*,
                { resolution: "720p", url: "https://example.com/ep1_720p.m3u8" },
                { resolution: "1080p", url: "https://example.com/ep1_1080p.m3u8" }*/
            ],
            subtitleTracks: [
               /* { 
                    language: "Español", 
                    code: "es", 
                    default: false,
                    url: "https://raw.githubusercontent.com/www-km/buitrago/refs/heads/main/spa.vtt"
                },
                { 
                    language: "Inglés", 
                    code: "en", 
                    default: false,
                    url: "https://raw.githubusercontent.com/www-km/buitrago/refs/heads/main/eng.vtt"
                },*/
                { 
                    language: "Desactivados", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 2,
            title: "VIVE CANAL DEL DRAMA",
            videoSources: [
                { resolution: "AUTO", url: "https://tinyurl.com/2bvqsdg2" }/*,
                { resolution: "480p", url: "https://example.com/ep1_480p.m3u8" },
                { resolution: "720p", url: "https://example.com/ep1_720p.m3u8" },
                { resolution: "1080p", url: "https://example.com/ep1_1080p.m3u8" }*/
            ],
            subtitleTracks: [
                /*{ 
                    language: "Español", 
                    code: "es", 
                    default: false,
                    url: "https://raw.githubusercontent.com/www-km/buitrago/refs/heads/main/spa.vtt"
                },
                { 
                    language: "Inglés", 
                    code: "en", 
                    default: false,
                    url: "https://raw.githubusercontent.com/www-km/buitrago/refs/heads/main/eng.vtt"
                },*/
                { 
                    language: "Desactivados", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        }
        // Más episodios pueden ser agregados aquí con la misma estructura
    ];

    // Elementos del DOM
    const videoElement = document.getElementById('video-element');
    const episodeTitle = document.getElementById('episode-title');
    const prevBtn = document.getElementById('prev-btn');
    const playBtn = document.getElementById('play-btn');
    const nextBtn = document.getElementById('next-btn');
    const backwardBtn = document.getElementById('backward-btn');
    const forwardBtn = document.getElementById('forward-btn');
    const episodesBtn = document.getElementById('episodes-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const muteBtn = document.getElementById('mute-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const resolutionSelect = document.getElementById('resolution-select');
    const subtitleSelect = document.getElementById('subtitle-select');
    const episodesModal = document.getElementById('episodes-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const episodeSearch = document.getElementById('episode-search');
    const episodesList = document.getElementById('episodes-list');
    const videoPreloader = document.getElementById('video-preloader');
    const loadingTitle = document.getElementById('loading-title');
    const loadingMessage = document.getElementById('loading-message');
    const connectionSpeed = document.getElementById('connection-speed');
    const bufferedAmount = document.getElementById('buffered-amount');
    const loadingProgress = document.getElementById('loading-progress');
    const qualityOptions = document.getElementById('quality-options');
    const qualitySuggestions = document.getElementById('quality-suggestions');
    const errorMessage = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    const retryBtn = document.getElementById('retry-btn');
    const videoProgress = document.getElementById('video-progress');
    const videoBuffer = document.getElementById('video-buffer');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const seekFeedback = document.getElementById('seek-feedback');

    // Variables de estado
    let currentEpisodeIndex = 0;
    let currentResolution = '360p';
    let currentSubtitle = 'off';
    let hls = null;
    let isPlaying = false;
    let isMuted = false;
    let volume = 1;
    let loadingStartTime = null;
    let slowConnectionThreshold = 5000; // 5 segundos
    let checkInterval = null;
    let bufferLength = 0;
    let lastBufferUpdate = 0;
    let networkSpeed = 0;
    let lastBytesLoaded = 0;
    let lastTimeChecked = 0;

    // Inicializar el reproductor
    function init() {
        // Cargar el primer episodio por defecto
        loadEpisode(currentEpisodeIndex);
        
        // Configurar event listeners
        setupEventListeners();
        
        // Configurar volumen inicial
        videoElement.volume = volume;
        
        // Configurar botón de reintento
        retryBtn.addEventListener('click', function() {
            loadEpisode(currentEpisodeIndex);
        });
    }

    // Configurar los event listeners
    function setupEventListeners() {
        // Controles del reproductor
        playBtn.addEventListener('click', togglePlay);
        prevBtn.addEventListener('click', playPreviousEpisode);
        nextBtn.addEventListener('click', playNextEpisode);
        backwardBtn.addEventListener('click', () => seekVideo(-10));
        forwardBtn.addEventListener('click', () => seekVideo(10));
        fullscreenBtn.addEventListener('click', toggleFullscreen);
        episodesBtn.addEventListener('click', openEpisodesModal);
        closeModalBtn.addEventListener('click', closeEpisodesModal);
        muteBtn.addEventListener('click', toggleMute);
        volumeSlider.addEventListener('input', changeVolume);
        
        // Selectores
        resolutionSelect.addEventListener('change', changeResolution);
        subtitleSelect.addEventListener('change', changeSubtitleTrack);
        
        // Buscador de episodios
        episodeSearch.addEventListener('input', searchEpisodes);
        
        // Eventos del video
        videoElement.addEventListener('play', () => {
            isPlaying = true;
            updatePlayButton();
        });
        
        videoElement.addEventListener('pause', () => {
            isPlaying = false;
            updatePlayButton();
        });
        
        videoElement.addEventListener('click', togglePlay);
        videoElement.addEventListener('timeupdate', updateProgressBar);
        videoElement.addEventListener('progress', updateBufferBar);
        videoElement.addEventListener('loadedmetadata', updateDurationDisplay);
        videoElement.addEventListener('waiting', showPreloader);
        videoElement.addEventListener('playing', hidePreloader);
        videoElement.addEventListener('error', handleVideoError);
        
        // Controles de teclado
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT') return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    seekVideo(-5);
                    break;
                case 'ArrowRight':
                    seekVideo(5);
                    break;
                case ' ':
                    togglePlay();
                    e.preventDefault();
                    break;
                case 'f':
                    toggleFullscreen();
                    break;
                case 'm':
                    toggleMute();
                    break;
                case 'ArrowUp':
                    changeVolume(0.1);
                    break;
                case 'ArrowDown':
                    changeVolume(-0.1);
                    break;
            }
        });
        
        // Preloader events
        videoPreloader.addEventListener('click', (e) => {
            if (e.target === videoPreloader) {
                hidePreloader();
            }
        });
    }

    // Función para retroceder/adelantar el video
    function seekVideo(seconds) {
        if (!videoElement) return;
        
        const newTime = videoElement.currentTime + seconds;
        videoElement.currentTime = Math.max(0, Math.min(newTime, videoElement.duration));
        
        // Mostrar feedback visual
        showSeekFeedback(seconds > 0 ? '+10s' : '-10s');
    }

    // Mostrar feedback visual al retroceder/adelantar
    function showSeekFeedback(text) {
        seekFeedback.textContent = text;
        seekFeedback.classList.add('show');
        
        setTimeout(() => {
            seekFeedback.classList.remove('show');
        }, 1000);
    }

    // Cargar un episodio
    function loadEpisode(index) {
        if (index < 0 || index >= episodes.length) return;
        
        currentEpisodeIndex = index;
        const episode = episodes[currentEpisodeIndex];
        
        // Actualizar la información del episodio
        episodeTitle.textContent = episode.title;
        
        // Detener y limpiar cualquier instancia HLS anterior
        if (hls) {
            hls.destroy();
        }
        
        // Encontrar la resolución predeterminada (360p)
        const defaultResolution = episode.videoSources.find(src => src.resolution === '360p') || episode.videoSources[0];
        currentResolution = defaultResolution.resolution;
        
        // Encontrar los subtítulos predeterminados (Inglés)
        const defaultSubtitle = episode.subtitleTracks.find(sub => sub.default) || episode.subtitleTracks[0];
        currentSubtitle = defaultSubtitle.code;
        
        // Configurar los selectores
        setupResolutionSelector(episode.videoSources);
        setupSubtitleSelector(episode.subtitleTracks);
        
        // Mostrar preloader
        showPreloader('Cargando episodio...');
        
        // Cargar el video
        loadHlsVideo(defaultResolution.url);
        
        // Cargar subtítulos
        loadSubtitles();
        
        // Actualizar los botones de navegación
        updateNavigationButtons();
    }

    // Cargar subtítulos
    function loadSubtitles() {
        const episode = episodes[currentEpisodeIndex];
        const subtitleTrack = episode.subtitleTracks.find(sub => sub.code === currentSubtitle);
        
        // Limpiar subtítulos existentes
        const existingTracks = videoElement.querySelectorAll('track');
        existingTracks.forEach(t => t.remove());
        
        if (currentSubtitle !== 'off' && subtitleTrack && subtitleTrack.url) {
            const track = document.createElement('track');
            track.kind = 'subtitles';
            track.label = subtitleTrack.language;
            track.srclang = subtitleTrack.code;
            track.src = subtitleTrack.url;
            track.default = subtitleTrack.default;
            
            videoElement.appendChild(track);
            
            track.addEventListener('load', () => {
                track.mode = 'showing';
                console.log(`Subtítulos en ${subtitleTrack.language} cargados`);
            });
            
            track.addEventListener('error', () => {
                console.error(`Error al cargar subtítulos en ${subtitleTrack.language}`);
                showError(`Error al cargar subtítulos en ${subtitleTrack.language}`);
            });
        }
    }

    // Cargar video HLS
    function loadHlsVideo(url) {
        loadingStartTime = Date.now();
        lastBytesLoaded = 0;
        lastTimeChecked = Date.now();
        networkSpeed = 0;
        
        if (Hls.isSupported()) {
            hls = new Hls({
                maxMaxBufferLength: 30,
                maxBufferSize: 6000000,
                maxBufferLength: 30,
                lowLatencyMode: false,
                enableWorker: true,
                startLevel: -1, // Auto quality
                abrEwmaDefaultEstimate: 500000, // 500kbps initial estimate
                abrBandWidthFactor: 0.95,
                abrBandWidthUpFactor: 0.7,
                abrMaxWithRealBitrate: true
            });
            
            hls.loadSource(url);
            hls.attachMedia(videoElement);
            
            hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
                updateLoadingMessage('Preparando transmisión...');
                updateLoadingProgress(30);
                
                // Guardar las opciones de calidad disponibles
                const availableQualities = data.levels.map(level => level.height + 'p');
                window.videoQualityOptions = availableQualities;
                
                // Verificar si la calidad actual está disponible
                const currentQuality = currentResolution.replace('p', '');
                const level = data.levels.findIndex(l => l.height === parseInt(currentQuality));
                
                if (level !== -1) {
                    hls.currentLevel = level;
                }
            });
            
            hls.on(Hls.Events.FRAG_LOADING, function(event, data) {
                const now = Date.now();
                if (now - lastTimeChecked >= 1000) { // Actualizar cada segundo
                    const bytesLoaded = data.stats.loaded;
                    const timeDelta = (now - lastTimeChecked) / 1000; // en segundos
                    const bytesDelta = bytesLoaded - lastBytesLoaded;
                    
                    if (timeDelta > 0) {
                        networkSpeed = (bytesDelta * 8) / (timeDelta * 1000000); // Mbps
                        updateNetworkStats();
                    }
                    
                    lastBytesLoaded = bytesLoaded;
                    lastTimeChecked = now;
                }
            });
            
            hls.on(Hls.Events.FRAG_BUFFERED, function(event, data) {
                bufferLength = videoElement.buffered.length ? 
                    videoElement.buffered.end(0) - videoElement.currentTime : 0;
                
                updateBufferStats();
                
                const progress = Math.min(30 + (bufferLength / 10) * 70, 95);
                updateLoadingProgress(progress);
                
                // Mostrar sugerencia de calidad si la conexión es lenta
                if (bufferLength < 5 && networkSpeed < 1.5) {
                    showQualitySuggestions();
                }
            });
            
            hls.on(Hls.Events.LEVEL_LOADED, function(event, data) {
                const level = hls.levels[data.level];
                const resolution = level.height + 'p';
                updateLoadingMessage(`Cargando ${resolution}...`);
            });
            
            hls.on(Hls.Events.ERROR, function(event, data) {
                console.error('HLS Error:', data);
                if (data.fatal) {
                    switch(data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            showError('Error de red. Verifica tu conexión.');
                            hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            showError('Error de formato de video.');
                            hls.recoverMediaError();
                            break;
                        default:
                            showError('Error al cargar el video.');
                            break;
                    }
                }
            });
            
            videoElement.play()
                .then(() => {
                    updateLoadingProgress(100);
                    setTimeout(hidePreloader, 500);
                    isPlaying = true;
                    updatePlayButton();
                })
                .catch(e => {
                    console.log('Autoplay prevented:', e);
                    hidePreloader();
                });
        } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
            // Soporte nativo para Safari
            videoElement.src = url;
            let progress = 10;
            const progressInterval = setInterval(() => {
                progress += 5;
                updateLoadingProgress(progress);
                if (progress >= 90) clearInterval(progressInterval);
            }, 300);
            
            videoElement.addEventListener('loadedmetadata', function() {
                updateLoadingProgress(100);
                setTimeout(hidePreloader, 500);
                videoElement.play()
                    .then(() => {
                        isPlaying = true;
                        updatePlayButton();
                    })
                    .catch(e => console.log('Autoplay prevented:', e));
            });
        } else {
            showError('Tu navegador no soporta la reproducción de videos HLS.');
        }
    }

    // Configurar el selector de resoluciones
    function setupResolutionSelector(sources) {
        resolutionSelect.innerHTML = '';
        
        sources.forEach(source => {
            const option = document.createElement('option');
            option.value = source.resolution;
            option.textContent = source.resolution;
            option.selected = source.resolution === currentResolution;
            resolutionSelect.appendChild(option);
        });
    }

    // Configurar el selector de subtítulos
    function setupSubtitleSelector(tracks) {
        subtitleSelect.innerHTML = '';
        
        tracks.forEach(track => {
            const option = document.createElement('option');
            option.value = track.code;
            option.textContent = track.language;
            option.selected = track.code === currentSubtitle;
            subtitleSelect.appendChild(option);
        });
    }

    // Cambiar resolución
    function changeResolution() {
        const selectedResolution = resolutionSelect.value;
        if (!selectedResolution || selectedResolution === currentResolution) return;
        
        currentResolution = selectedResolution;
        const episode = episodes[currentEpisodeIndex];
        const newSource = episode.videoSources.find(src => src.resolution === selectedResolution);
        
        if (newSource) {
            showPreloader(`Cambiando a ${selectedResolution}...`);
            loadHlsVideo(newSource.url);
        }
    }

    // Cambiar subtítulos
    function changeSubtitleTrack() {
        const selectedSubtitle = subtitleSelect.value;
        if (!selectedSubtitle || selectedSubtitle === currentSubtitle) return;
        
        currentSubtitle = selectedSubtitle;
        loadSubtitles();
    }

    // Alternar reproducción
    function togglePlay() {
        if (videoElement.paused) {
            videoElement.play()
                .then(() => {
                    isPlaying = true;
                    updatePlayButton();
                })
                .catch(e => {
                    console.log('Error al reproducir:', e);
                    showError('Error al iniciar la reproducción');
                });
        } else {
            videoElement.pause();
            isPlaying = false;
            updatePlayButton();
        }
    }

    // Actualizar el botón de play/pause
    function updatePlayButton() {
        const playIcon = playBtn.querySelector('#play-icon');
        if (isPlaying) {
            playIcon.setAttribute('d', 'M6 19h4V5H6v14zm8-14v14h4V5h-4z');
            playBtn.title = "Pausar";
        } else {
            playIcon.setAttribute('d', 'M8 5v14l11-7z');
            playBtn.title = "Reproducir";
        }
    }

    // Alternar silencio
    function toggleMute() {
        isMuted = !isMuted;
        videoElement.muted = isMuted;
        updateMuteButton();
    }

    // Actualizar botón de silencio
    function updateMuteButton() {
        const volumeIcon = muteBtn.querySelector('#volume-icon');
        if (isMuted || volume === 0) {
            volumeIcon.setAttribute('d', 'M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z');
        } else if (volume < 0.5) {
            volumeIcon.setAttribute('d', 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z');
        } else {
            volumeIcon.setAttribute('d', 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z');
        }
    }

    // Cambiar volumen
    function changeVolume(change) {
        if (typeof change === 'object') {
            // Evento de input del slider
            volume = parseFloat(volumeSlider.value);
        } else {
            // Cambio por teclado
            volume = Math.max(0, Math.min(1, volume + change));
            volumeSlider.value = volume;
        }
        
        videoElement.volume = volume;
        videoElement.muted = false;
        isMuted = false;
        updateMuteButton();
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
        // Solicitar pantalla completa para el contenedor del video
        document.querySelector('.video-wrapper').requestFullscreen().catch(err => {
            console.log(`Error al intentar pantalla completa: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

    // Actualizar barra de progreso
    function updateProgressBar() {
        if (!videoElement.duration) return;
        
        const percent = (videoElement.currentTime / videoElement.duration) * 100;
        videoProgress.style.width = `${percent}%`;
        
        // Actualizar tiempo actual
        currentTimeDisplay.textContent = formatTime(videoElement.currentTime);
    }

    // Actualizar barra de buffer
    function updateBufferBar() {
        if (!videoElement.buffered.length) return;
        
        const bufferedEnd = videoElement.buffered.end(videoElement.buffered.length - 1);
        const percent = (bufferedEnd / videoElement.duration) * 100;
        videoBuffer.style.width = `${percent}%`;
    }

    // Actualizar duración del video
    function updateDurationDisplay() {
        durationDisplay.textContent = formatTime(videoElement.duration);
    }

    // Formatear tiempo (segundos a MM:SS)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
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

    // Mostrar preloader
    function showPreloader(message = 'Cargando...') {
        videoPreloader.classList.add('active');
        updateLoadingMessage(message);
        updateLoadingProgress(0);
        hideError();
        hideQualitySuggestions();
        
        // Comenzar a verificar por conexión lenta
        loadingStartTime = Date.now();
        if (checkInterval) clearInterval(checkInterval);
        checkInterval = setInterval(checkForSlowConnection, 1000);
    }

    // Ocultar preloader
    function hidePreloader() {
        videoPreloader.classList.remove('active');
        if (checkInterval) clearInterval(checkInterval);
    }

    // Actualizar mensaje de carga
    function updateLoadingMessage(message) {
        loadingMessage.textContent = message;
    }

    // Actualizar progreso de carga
    function updateLoadingProgress(percent) {
        loadingProgress.style.width = `${percent}%`;
    }

    // Actualizar estadísticas de red
    function updateNetworkStats() {
        connectionSpeed.textContent = `${networkSpeed.toFixed(2)} Mbps`;
    }

    // Actualizar estadísticas de buffer
    function updateBufferStats() {
        bufferedAmount.textContent = `${bufferLength.toFixed(1)} seg`;
    }

    // Verificar por conexión lenta
    function checkForSlowConnection() {
        const loadingTime = Date.now() - loadingStartTime;
        
        if (loadingTime > slowConnectionThreshold) {
            showQualitySuggestions();
            clearInterval(checkInterval);
        }
    }

    // Mostrar sugerencias de calidad
    function showQualitySuggestions() {
        if (!window.videoQualityOptions || window.videoQualityOptions.length < 2) return;
        
        qualitySuggestions.style.display = 'block';
        renderQualityOptions(window.videoQualityOptions);
    }

    // Ocultar sugerencias de calidad
    function hideQualitySuggestions() {
        qualitySuggestions.style.display = 'none';
    }

    // Renderizar opciones de calidad
    function renderQualityOptions(qualities) {
        qualityOptions.innerHTML = '';
        
        qualities.forEach(quality => {
            if (quality === currentResolution) return;
            
            const option = document.createElement('div');
            option.className = 'quality-option';
            option.textContent = quality;
            option.addEventListener('click', () => {
                resolutionSelect.value = quality;
                changeResolution();
                hideQualitySuggestions();
            });
            qualityOptions.appendChild(option);
        });
    }

    // Mostrar error
    function showError(message) {
        errorText.textContent = message;
        errorMessage.style.display = 'block';
        loadingMessage.style.display = 'none';
    }

    // Ocultar error
    function hideError() {
        errorMessage.style.display = 'none';
        loadingMessage.style.display = 'block';
    }

    // Manejar errores de video
    function handleVideoError() {
        let errorMessage = 'Error desconocido';
        switch(videoElement.error.code) {
            case 1:
                errorMessage = 'Video cancelado';
                break;
            case 2:
                errorMessage = 'Error de red';
                break;
            case 3:
                errorMessage = 'Error al decodificar video';
                break;
            case 4:
                errorMessage = 'Video no soportado';
                break;
        }
        showError(errorMessage);
    }

    // Inicializar la aplicación
    init();
});
