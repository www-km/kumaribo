document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    
    if (!secureStreamUrl) {
        errorElement.textContent = 'Error: No se pudo cargar la URL del video';
        errorElement.style.display = 'flex';
        loadingElement.style.display = 'none';
        return;
    }

    const handleError = (message) => {
        console.error(message);
        loadingElement.style.display = 'none';
        errorElement.textContent = message;
        errorElement.style.display = 'flex';
    };

    // Función para iniciar la reproducción
    const startPlayback = () => {
        video.play().catch(e => {
            // Si falla el play(), al menos cargar el video
            video.controls = true;
            loadingElement.style.display = 'none';
        });
    };

    // Mostrar botón de inicio para móviles
    const showPlayButton = () => {
        loadingElement.innerHTML = '<button id="playBtn" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">Reproducir Video</button>';
        document.getElementById('playBtn').addEventListener('click', () => {
            loadingElement.style.display = 'none';
            startPlayback();
        });
    };

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Safari
        video.src = secureStreamUrl;
        video.addEventListener('loadedmetadata', () => {
            loadingElement.style.display = 'none';
            showPlayButton(); // Requerir interacción en iOS
        });
    } else if (Hls.isSupported()) {
        // Otros navegadores
        const hls = new Hls({
            enableWorker: true,
            lowLatencyMode: false
        });
        
        hls.loadSource(secureStreamUrl);
        hls.attachMedia(video);
        
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            loadingElement.style.display = 'none';
            
            // Intentar reproducción automática solo si es posible
            const promise = video.play();
            
            if (promise !== undefined) {
                promise.catch(() => {
                    // Si falla, mostrar controles y/o botón
                    video.controls = true;
                    showPlayButton();
                });
            }
        });
        
        hls.on(Hls.Events.ERROR, (event, data) => {
            if (data.fatal) {
                handleError('Error al cargar el video');
            }
        });
    } else {
        handleError('Tu navegador no soporta este formato de video');
    }

    // Manejo de clic en el contenedor para iniciar en móviles
    document.querySelector('.player-container').addEventListener('click', () => {
        if (video.paused) {
            startPlayback();
        }
    });
});
