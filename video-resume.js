document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const videoElement = document.getElementById('video-element');
    const videoContainer = document.querySelector('.video-container');
    
    // Crear elementos de la barra de progreso
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    
    const progressHandle = document.createElement('div');
    progressHandle.className = 'progress-handle';
    
    const timeTooltip = document.createElement('div');
    timeTooltip.className = 'time-tooltip';
    
    progressBar.appendChild(progressHandle);
    progressContainer.appendChild(progressBar);
    progressContainer.appendChild(timeTooltip);
    videoContainer.appendChild(progressContainer);
    
    // Variables de estado
    let isDragging = false;
    let wasPlayingBeforeDrag = false;
    let isTouchDevice = 'ontouchstart' in window;
    
    // Manejar dispositivos táctiles
    if (isTouchDevice) {
        videoContainer.addEventListener('click', function() {
            videoContainer.classList.toggle('touch-active');
            setTimeout(() => {
                videoContainer.classList.remove('touch-active');
            }, 3000);
        });
    }
    
    // Intentar recuperar el tiempo guardado
    const savedTime = localStorage.getItem('videoProgress_' + window.location.href);
    if (savedTime) {
        videoElement.addEventListener('loadedmetadata', function() {
            if (parseFloat(savedTime) < videoElement.duration) {
                videoElement.currentTime = parseFloat(savedTime);
            }
            videoElement.removeEventListener('loadedmetadata', arguments.callee);
        });
    }
    
    // Guardar el progreso periódicamente
    setInterval(function() {
        if (!isDragging && !videoElement.paused) {
            localStorage.setItem('videoProgress_' + window.location.href, videoElement.currentTime);
        }
    }, 5000);
    
    // Actualizar la barra de progreso
    function updateProgressBar() {
        if (!isDragging && videoElement.duration) {
            const percent = (videoElement.currentTime / videoElement.duration) * 100;
            progressBar.style.width = percent + '%';
            progressHandle.style.left = percent + '%';
        }
    }
    
    // Formatear tiempo (segundos a MM:SS)
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    
    // Event Listeners
    videoElement.addEventListener('timeupdate', updateProgressBar);
    
    progressContainer.addEventListener('mousedown', function(e) {
        if (videoElement.duration) {
            isDragging = true;
            wasPlayingBeforeDrag = !videoElement.paused;
            if (wasPlayingBeforeDrag) videoElement.pause();
            handleProgressClick(e);
        }
    });
    
    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            handleProgressClick(e);
        }
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            if (wasPlayingBeforeDrag) videoElement.play();
            localStorage.setItem('videoProgress_' + window.location.href, videoElement.currentTime);
        }
    });
    
    // Mostrar tooltip al interactuar
    progressContainer.addEventListener('mousemove', function(e) {
        if (videoElement.duration) {
            const rect = progressContainer.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const time = percent * videoElement.duration;
            
            timeTooltip.textContent = formatTime(time);
            timeTooltip.style.left = `${Math.min(Math.max(percent * 100, 5), 95)}%`;
            timeTooltip.style.display = 'block';
        }
    });
    
    progressContainer.addEventListener('mouseout', function() {
        if (!isDragging) {
            timeTooltip.style.display = 'none';
        }
    });
    
    // Manejar dispositivos táctiles
    if (isTouchDevice) {
        progressContainer.addEventListener('touchstart', function(e) {
            if (videoElement.duration) {
                e.preventDefault();
                isDragging = true;
                wasPlayingBeforeDrag = !videoElement.paused;
                if (wasPlayingBeforeDrag) videoElement.pause();
                handleTouchProgress(e);
            }
        });
        
        document.addEventListener('touchmove', function(e) {
            if (isDragging) {
                e.preventDefault();
                handleTouchProgress(e);
            }
        });
        
        document.addEventListener('touchend', function() {
            if (isDragging) {
                isDragging = false;
                if (wasPlayingBeforeDrag) videoElement.play();
                localStorage.setItem('videoProgress_' + window.location.href, videoElement.currentTime);
                timeTooltip.style.display = 'none';
            }
        });
        
        function handleTouchProgress(e) {
            const touch = e.touches[0];
            const rect = progressContainer.getBoundingClientRect();
            const percent = (touch.clientX - rect.left) / rect.width;
            const time = Math.max(0, Math.min(percent * videoElement.duration, videoElement.duration));
            
            videoElement.currentTime = time;
            updateProgressBar();
            
            timeTooltip.textContent = formatTime(time);
            timeTooltip.style.left = `${Math.min(Math.max(percent * 100, 5), 95)}%`;
            timeTooltip.style.display = 'block';
        }
    }
    
    function handleProgressClick(e) {
        const rect = progressContainer.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const time = Math.max(0, Math.min(percent * videoElement.duration, videoElement.duration));
        
        videoElement.currentTime = time;
        updateProgressBar();
        
        timeTooltip.textContent = formatTime(time);
        timeTooltip.style.left = `${Math.min(Math.max(percent * 100, 5), 95)}%`;
        timeTooltip.style.display = 'block';
    }
    
    // Limpiar el localStorage cuando el video termine
    videoElement.addEventListener('ended', function() {
        localStorage.removeItem('videoProgress_' + window.location.href);
    });
});
