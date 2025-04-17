class VideoPreloader {
    constructor() {
        this.preloaderHtml = `
            <div class="preloader-overlay" id="video-preloader">
                <div class="preloader-content">
                    <div class="preloader-spinner"></div>
                    <h3 class="preloader-title">KUMARIBO</h3>
                    <p class="preloader-message" id="preloader-message">Preparando reproductor...</p>
                    <div class="preloader-progress">
                        <div class="preloader-progress-bar" id="progress-bar"></div>
                    </div>
                    <div class="connection-warning" id="connection-warning">
                        <p>¡Conexión lenta detectada!</p>
                        <div class="quality-options" id="quality-options"></div>
                        <button class="retry-btn" id="retry-btn">Reintentar</button>
                    </div>
                </div>
            </div>
        `;
        
        this.loadingStartTime = null;
        this.slowConnectionThreshold = 5000; // 5 segundos
        this.checkInterval = null;
        this.currentQuality = 'auto';
    }

    init() {
        document.body.insertAdjacentHTML('beforeend', this.preloaderHtml);
        this.preloaderElement = document.getElementById('video-preloader');
        this.progressBar = document.getElementById('progress-bar');
        this.messageElement = document.getElementById('preloader-message');
        this.connectionWarning = document.getElementById('connection-warning');
        this.qualityOptions = document.getElementById('quality-options');
        this.retryBtn = document.getElementById('retry-btn');
        
        this.retryBtn.addEventListener('click', () => this.handleRetry());
    }

    show() {
        this.loadingStartTime = Date.now();
        this.preloaderElement.style.display = 'flex';
        this.updateMessage('Cargando video...');
        this.updateProgress(0);
        
        // Comenzar a verificar por conexión lenta
        this.checkInterval = setInterval(() => this.checkForSlowConnection(), 1000);
    }

    hide() {
        clearInterval(this.checkInterval);
        this.preloaderElement.style.display = 'none';
    }

    updateProgress(percent) {
        this.progressBar.style.width = `${percent}%`;
    }

    updateMessage(message) {
        this.messageElement.textContent = message;
    }

    checkForSlowConnection() {
        const loadingTime = Date.now() - this.loadingStartTime;
        
        if (loadingTime > this.slowConnectionThreshold) {
            this.showConnectionWarning();
            clearInterval(this.checkInterval);
        }
    }

    showConnectionWarning() {
        this.updateMessage('La conexión parece estar lenta...');
        this.connectionWarning.classList.add('show');
        
        // Mostrar opciones de calidad si están disponibles
        if (window.videoQualityOptions && window.videoQualityOptions.length > 1) {
            this.renderQualityOptions(window.videoQualityOptions);
        }
    }

    renderQualityOptions(qualities) {
        this.qualityOptions.innerHTML = '';
        
        qualities.forEach(quality => {
            const option = document.createElement('div');
            option.className = `quality-option ${quality === this.currentQuality ? 'active' : ''}`;
            option.textContent = quality;
            option.addEventListener('click', () => this.handleQualityChange(quality));
            this.qualityOptions.appendChild(option);
        });
    }

    handleQualityChange(quality) {
        this.currentQuality = quality;
        this.updateMessage(`Cambiando a ${quality}...`);
        
        // Aquí implementarías el cambio real de calidad
        if (window.changeVideoQuality) {
            window.changeVideoQuality(quality);
        }
        
        // Actualizar UI
        const options = this.qualityOptions.querySelectorAll('.quality-option');
        options.forEach(opt => {
            opt.classList.toggle('active', opt.textContent === quality);
        });
    }

    handleRetry() {
        this.updateMessage('Reintentando conexión...');
        this.connectionWarning.classList.remove('show');
        this.loadingStartTime = Date.now();
        
        // Aquí implementarías la lógica para reintentar la conexión
        if (window.retryVideoLoad) {
            window.retryVideoLoad();
        }
        
        // Volver a verificar por conexión lenta
        this.checkInterval = setInterval(() => this.checkForSlowConnection(), 1000);
    }

    showError(message) {
        clearInterval(this.checkInterval);
        this.updateMessage(message);
        this.connectionWarning.classList.add('show');
        this.connectionWarning.querySelector('p').textContent = 'Error al cargar el video';
        this.retryBtn.style.display = 'block';
    }
}

// Inicializar el preloader
const videoPreloader = new VideoPreloader();
videoPreloader.init();

// Exportar para uso global
window.videoPreloader = videoPreloader;
