document.addEventListener('DOMContentLoaded', function() {
    // Datos de los episodios con URLs para audio y subtítulos
    const episodes = [
        {
            id: 1,
            title: "S01E01",
            videoSources: [
                
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E01-35093/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E01-35093/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E01-35093/1080/1080p.m3u8" }
            ],
            audioTracks: [
               
                { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               
                { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
        {
            id: 2,
            title: "S01E02",
            videoSources: [
               
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E02-35094/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E02-35094/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E02-35094/1080/1080p.m3u8" }
            ],
            audioTracks: [
               
                { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               
                { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
        {
            id: 3,
            title: "S01E03",
            videoSources: [
          
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E03-35095/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E03-35095/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E03-35095/1080/1080p.m3u8" }
            ],
               audioTracks: [
               
                { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               
                { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
              {
            id: 4,
            title: "S01E04",
            videoSources: [
                
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E04-35092/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E04-35092/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E04-35092/1080/1080p.m3u8" }
            ],
            audioTracks: [
               
                { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               
                { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
              {
            id: 5,
            title: "S01E05",
            videoSources: [
               
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E05-35096/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E05-35096/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E05-35096/1080/1080p.m3u8" }
            ],
            audioTracks: [
               
                { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               
                { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
              {
            id: 6,
            title: "S01E06",
            videoSources: [
                
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E06-35097/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E06-35097/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E06-35097/1080/1080p.m3u8" }
            ],
           audioTracks: [
               
                { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               
                { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
              {
            id: 7,
            title: "S01E07",
            videoSources: [
                
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E07-35098/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E07-35098/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E07-35098/1080/1080p.m3u8" }
            ],
               audioTracks: [
               
                { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               
                { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
              {
            id: 8,
            title: "S01E08",
            videoSources: [
               { resolution: "480p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E08-35099/480/480p.m3u8" },
               { resolution: "720p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E08-35099/720/720p.m3u8" },
               { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2021/71914/01/S01E08-35099/1080/1080p.m3u8" }
            ],
               audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
              {
            id: 9,
            title: "S02E01",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E01-35082/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E01-35082/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E01-35082/1080/1080p.m3u8" }
            ],
              audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
              {
            id: 10,
            title: "S02E02",
            videoSources: [
               { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E02-35083/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E02-35083/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E02-35083/1080/1080p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
              {
            id: 11,
            title: "S02E03",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E03-35084/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E03-35084/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E03-35084/1080/1080p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
              {
            id: 12,
            title: "S02E04",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E04-35085/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E04-35085/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E04-35085/1080/1080p.m3u8" }
            ],
            audioTracks: [
                { language: "Español", code: "es", url: "https://example.com/audio/es/ep1.m3u8", default: false },
                { language: "Inglés", code: "en", url: "https://example.com/audio/en/ep1.m3u8", default: false }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
        {
            id: 13,
            title: "S02E05",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E05-35086/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E05-35086/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E05-35086/1080/1080p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
        {
            id: 14,
            title: "S02E06",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E06-35087/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E06-35087/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E06-35087/480/720p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
        {
            id: 15,
            title: "S02E07",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E07-35088/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E07-35088/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E07-35088/1080/1080p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
        {
            id: 16,
            title: "S02E08",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E08-35089/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E08-35089/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/02/S02E08-35089/1080/1080p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
        {
            id: 17,
            title: "S03E01",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E01-34922/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E01-34922/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E01-34922/1080/1080p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
        {
            id: 18,
            title: "S03E02",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E02-34955/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E02-34955/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E02-34955/1080/1080p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
{
            id: 19,
            title: "S03E03",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E03-34956/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E03-34956/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E03-34956/1080/1080p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
{
            id: 20,
            title: "S03E04",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E04-48661/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E04-48661/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E04-48661/1080/1080p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
{
            id: 21,
            title: "S03E05",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E05-90196/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E05-90196/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E05-90196/1080/1080p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
{
            id: 22,
            title: "S03E06",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E06-92920/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E06-92920/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E06-92920/1080/1080p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        },
{
            id: 23,
            title: "S03E07",
            videoSources: [
                { resolution: "480p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E07-93250/480/480p.m3u8" },
                { resolution: "720p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E07-93250/720/720p.m3u8" },
                { resolution: "1080p", url: "https://v2.fiestareel.com/tv/2022/71914/03/S03E07-93250/1080/1080p.m3u8" }
            ],
            audioTracks: [
               { language: "Español", code: "off", url: "", default: true }
            ],
            subtitleTracks: [
               { language: "Desactivados", code: "off", url: "", default: false }
            ]
        }
        // Puedes agregar más episodios aquí con la misma estructura
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
    const resolutionSelect = document.getElementById('resolution-select');
    const audioSelect = document.getElementById('audio-select');
    const subtitleSelect = document.getElementById('subtitle-select');
    const episodesModal = document.getElementById('episodes-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const episodeSearch = document.getElementById('episode-search');
    const episodesList = document.getElementById('episodes-list');

    // Variables de estado
    let currentEpisodeIndex = 0;
    let currentResolution = '480p';
    let currentAudio = 'off';
    let currentSubtitle = 'off';
    let hls = null;
    let hlsAudio = null;
    let isPlaying = false;
    let audioElement = null;

    // Inicializar el reproductor
    function init() {
        // Configurar atributos importantes del video
        videoElement.setAttribute('crossorigin', 'anonymous');
        videoElement.setAttribute('playsinline', '');
        
        // Crear elemento de audio oculto si no existe
        if (!document.getElementById('audio-element')) {
            audioElement = document.createElement('audio');
            audioElement.id = 'audio-element';
            audioElement.style.display = 'none';
            document.body.appendChild(audioElement);
        }
        
        loadEpisode(currentEpisodeIndex);
        setupEventListeners();
    }

    // Configurar event listeners
    function setupEventListeners() {
        playBtn.addEventListener('click', togglePlay);
        prevBtn.addEventListener('click', playPreviousEpisode);
        nextBtn.addEventListener('click', playNextEpisode);
        backwardBtn.addEventListener('click', () => seekVideo(-10));
        forwardBtn.addEventListener('click', () => seekVideo(10));
        fullscreenBtn.addEventListener('click', toggleFullscreen);
        episodesBtn.addEventListener('click', openEpisodesModal);
        closeModalBtn.addEventListener('click', closeEpisodesModal);
        resolutionSelect.addEventListener('change', changeResolution);
        audioSelect.addEventListener('change', changeAudioTrack);
        subtitleSelect.addEventListener('change', changeSubtitleTrack);
        episodeSearch.addEventListener('input', searchEpisodes);
        
        videoElement.addEventListener('play', () => {
            isPlaying = true;
            updatePlayButton();
            if (audioElement) audioElement.play();
        });
        
        videoElement.addEventListener('pause', () => {
            isPlaying = false;
            updatePlayButton();
            if (audioElement) audioElement.pause();
        });
        
        videoElement.addEventListener('click', togglePlay);
        
        // Sincronización de audio y video
        videoElement.addEventListener('seeking', () => {
            if (audioElement) audioElement.currentTime = videoElement.currentTime;
        });
        
        videoElement.addEventListener('timeupdate', () => {
            if (audioElement) {
                const timeDiff = Math.abs(videoElement.currentTime - audioElement.currentTime);
                if (timeDiff > 0.3) {
                    audioElement.currentTime = videoElement.currentTime;
                }
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT') return;
            
            switch(e.key) {
                case 'ArrowLeft': seekVideo(-10); break;
                case 'ArrowRight': seekVideo(10); break;
                case ' ': togglePlay(); e.preventDefault(); break;
            }
        });
    }

    // Cargar un episodio
    function loadEpisode(index) {
        if (index < 0 || index >= episodes.length) return;
        
        currentEpisodeIndex = index;
        const episode = episodes[currentEpisodeIndex];
        
        episodeTitle.textContent = episode.title;
        
        // Limpiar HLS anteriores
        if (hls) {
            hls.destroy();
            hls = null;
        }
        if (hlsAudio) {
            hlsAudio.destroy();
            hlsAudio = null;
        }
        
        // Configurar resolución, audio y subtítulos por defecto
        const defaultResolution = episode.videoSources.find(src => src.resolution === '360p') || episode.videoSources[0];
        const defaultAudio = episode.audioTracks.find(audio => audio.default) || episode.audioTracks[0];
        const defaultSubtitle = episode.subtitleTracks.find(sub => sub.default) || episode.subtitleTracks[0];
        
        currentResolution = defaultResolution.resolution;
        currentAudio = defaultAudio.code;
        currentSubtitle = defaultSubtitle.code;
        
        setupResolutionSelector(episode.videoSources);
        setupAudioSelector(episode.audioTracks);
        setupSubtitleSelector(episode.subtitleTracks);
        
        // Cargar video y audio
        loadVideoAndAudio(defaultResolution.url, defaultAudio);
        
        // Cargar subtítulos
        if (defaultSubtitle.code !== 'off') {
            loadSubtitleTrack(defaultSubtitle.url, defaultSubtitle.code);
        }
        
        updateNavigationButtons();
    }

    // Cargar video y audio
    function loadVideoAndAudio(videoUrl, audioTrack) {
        window.videoPreloader.show();
        window.videoPreloader.updateProgress(10);
        
        // Cargar video
        if (Hls.isSupported()) {
            hls = new Hls({
                maxMaxBufferLength: 30,
                maxBufferSize: 6000000,
                maxBufferLength: 30,
                lowLatencyMode: false,
                enableWorker: true
            });
            
            hls.loadSource(videoUrl);
            hls.attachMedia(videoElement);
            
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                window.videoPreloader.updateProgress(50);
                window.videoPreloader.updateMessage('Buffering...');
                
                // Cargar audio si no está desactivado
                if (audioTrack.code !== 'off' && audioTrack.url) {
                    loadAudio(audioTrack);
                }
                
                videoElement.play()
                    .then(() => {
                        window.videoPreloader.updateProgress(100);
                        setTimeout(() => window.videoPreloader.hide(), 500);
                        isPlaying = true;
                        updatePlayButton();
                    })
                    .catch(e => {
                        console.log('Autoplay prevented:', e);
                        window.videoPreloader.hide();
                    });
            });
            
            hls.on(Hls.Events.ERROR, function(event, data) {
                console.error('HLS Error:', data);
                if (data.fatal) {
                    window.videoPreloader.showError('Error al cargar el video');
                    if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
                        hls.startLoad();
                    } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
                        hls.recoverMediaError();
                    }
                }
            });
        } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
            // Para Safari y navegadores con soporte nativo de HLS
            videoElement.src = videoUrl;
            
            // Cargar audio si no está desactivado
            if (audioTrack.code !== 'off' && audioTrack.url) {
                if (!audioElement) {
                    audioElement = document.createElement('audio');
                    audioElement.id = 'audio-element';
                    audioElement.style.display = 'none';
                    document.body.appendChild(audioElement);
                }
                
                audioElement.src = audioTrack.url;
                audioElement.addEventListener('loadedmetadata', () => {
                    videoElement.play().then(() => audioElement.play());
                });
            } else {
                videoElement.addEventListener('loadedmetadata', () => {
                    videoElement.play().catch(e => console.log('Autoplay prevented:', e));
                });
            }
            
            let progress = 10;
            const progressInterval = setInterval(() => {
                progress += 5;
                window.videoPreloader.updateProgress(progress);
                if (progress >= 90) clearInterval(progressInterval);
            }, 300);
            
            videoElement.addEventListener('loadedmetadata', function() {
                window.videoPreloader.updateProgress(100);
                setTimeout(() => window.videoPreloader.hide(), 500);
            });
        } else {
            window.videoPreloader.showError('Tu navegador no soporta HLS');
        }
    }

    // Cargar audio
    function loadAudio(audioTrack) {
        if (!audioTrack || audioTrack.code === 'off' || !audioTrack.url) {
            if (audioElement) {
                audioElement.pause();
                audioElement.removeAttribute('src');
            }
            return;
        }
        
        console.log('Cargando audio:', audioTrack.language);
        
        if (Hls.isSupported()) {
            hlsAudio = new Hls();
            hlsAudio.loadSource(audioTrack.url);
            hlsAudio.attachMedia(audioElement);
            
            hlsAudio.on(Hls.Events.MANIFEST_PARSED, function() {
                if (!videoElement.paused) {
                    audioElement.play();
                }
            });
        } else if (audioElement.canPlayType('application/vnd.apple.mpegurl')) {
            audioElement.src = audioTrack.url;
            audioElement.addEventListener('loadedmetadata', () => {
                if (!videoElement.paused) {
                    audioElement.play();
                }
            });
        }
    }

    // Cargar subtítulos
    function loadSubtitleTrack(url, lang) {
        // Limpiar tracks existentes
        Array.from(videoElement.querySelectorAll('track')).forEach(t => t.remove());
        
        if (lang === 'off' || !url) return;
        
        const track = document.createElement('track');
        track.kind = 'subtitles';
        track.srclang = lang;
        track.label = lang.toUpperCase();
        track.src = url + '?t=' + Date.now(); // Cache buster
        track.default = true;

        track.addEventListener('error', () => {
            console.error('Error cargando subtítulos:', url);
        });

        track.addEventListener('load', () => {
            track.track.mode = 'showing';
            console.log('Subtítulos activados:', lang);
            
            // Solución para algunos navegadores que no muestran subtítulos inmediatamente
            setTimeout(() => {
                if (track.track.mode !== 'showing') {
                    track.track.mode = 'showing';
                }
            }, 500);
        });

        videoElement.appendChild(track);
    }

    // Configurar selectores
    function setupResolutionSelector(sources) {
        resolutionSelect.innerHTML = sources.map(src => 
            `<option value="${src.resolution}" ${src.resolution === currentResolution ? 'selected' : ''}>
                ${src.resolution}
            </option>`
        ).join('');
    }

    function setupAudioSelector(tracks) {
        audioSelect.innerHTML = tracks.map(track => 
            `<option value="${track.code}" ${track.code === currentAudio ? 'selected' : ''}>
                ${track.language}
            </option>`
        ).join('');
    }

    function setupSubtitleSelector(tracks) {
        subtitleSelect.innerHTML = tracks.map(track => 
            `<option value="${track.code}" ${track.code === currentSubtitle ? 'selected' : ''}>
                ${track.language}
            </option>`
        ).join('');
    }

    // Cambiar resolución
    function changeResolution() {
        const selected = resolutionSelect.value;
        if (!selected || selected === currentResolution) return;
        
        currentResolution = selected;
        const episode = episodes[currentEpisodeIndex];
        const source = episode.videoSources.find(src => src.resolution === selected);
        
        if (source) {
            const audioTrack = episode.audioTracks.find(t => t.code === currentAudio) || episode.audioTracks[0];
            loadVideoAndAudio(source.url, audioTrack);
        }
    }

    // Cambiar audio
    function changeAudioTrack() {
        const selected = audioSelect.value;
        if (!selected || selected === currentAudio) return;
        
        currentAudio = selected;
        const episode = episodes[currentEpisodeIndex];
        const track = episode.audioTracks.find(t => t.code === selected);
        
        if (track) {
            loadAudio(track);
        }
    }

    // Cambiar subtítulos
    function changeSubtitleTrack() {
        const selected = subtitleSelect.value;
        if (!selected || selected === currentSubtitle) return;
        
        currentSubtitle = selected;
        const episode = episodes[currentEpisodeIndex];
        const track = episode.subtitleTracks.find(t => t.code === selected);
        
        if (track) {
            loadSubtitleTrack(track.url, track.code);
        }
    }

    // Funciones del reproductor
    function togglePlay() {
        if (videoElement.paused) {
            videoElement.play().catch(e => console.log('Error al reproducir:', e));
            if (audioElement) audioElement.play();
        } else {
            videoElement.pause();
            if (audioElement) audioElement.pause();
        }
    }

    function seekVideo(seconds) {
        const newTime = videoElement.currentTime + seconds;
        videoElement.currentTime = Math.max(0, Math.min(newTime, videoElement.duration));
        if (audioElement) audioElement.currentTime = videoElement.currentTime;
    }

    function updatePlayButton() {
        const icon = playBtn.querySelector('i');
        if (isPlaying) {
            icon.classList.replace('fa-play', 'fa-pause');
            playBtn.title = "Pausar";
        } else {
            icon.classList.replace('fa-pause', 'fa-play');
            playBtn.title = "Reproducir";
        }
    }

    function playPreviousEpisode() {
        if (currentEpisodeIndex > 0) loadEpisode(currentEpisodeIndex - 1);
    }

    function playNextEpisode() {
        if (currentEpisodeIndex < episodes.length - 1) loadEpisode(currentEpisodeIndex + 1);
    }

    function updateNavigationButtons() {
        prevBtn.disabled = currentEpisodeIndex <= 0;
        nextBtn.disabled = currentEpisodeIndex >= episodes.length - 1;
    }

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            videoElement.requestFullscreen().catch(console.error);
        } else {
            document.exitFullscreen();
        }
    }

    function openEpisodesModal() {
        renderEpisodesList();
        episodesModal.style.display = 'flex';
    }

    function closeEpisodesModal() {
        episodesModal.style.display = 'none';
    }

    function renderEpisodesList() {
        episodesList.innerHTML = episodes.map((episode, index) => `
            <div class="episode-item ${index === currentEpisodeIndex ? 'active' : ''}" data-index="${index}">
                <div>
                    <span class="episode-number">Ep. ${index + 1}</span>
                    ${episode.title}
                </div>
                <i class="fas fa-play"></i>
            </div>
        `).join('');
        
        episodesList.querySelectorAll('.episode-item').forEach(item => {
            item.addEventListener('click', () => {
                loadEpisode(parseInt(item.dataset.index));
                closeEpisodesModal();
            });
        });
    }

    function searchEpisodes() {
        const term = episodeSearch.value.toLowerCase();
        episodesList.querySelectorAll('.episode-item').forEach(item => {
            const index = parseInt(item.dataset.index);
            const matches = episodes[index].title.toLowerCase().includes(term);
            item.style.display = matches ? 'flex' : 'none';
        });
    }

    // Inicializar
    init();
});
