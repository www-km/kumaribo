class ProfessionalPreloader {
    constructor() {
        this.overlay = document.getElementById('preloader-overlay');
        this.container = this.overlay.querySelector('.preloader-container');
        this.progressFill = this.overlay.querySelector('.progress-fill');
        this.spinner = this.overlay.querySelector('.loader-spinner');
        this.title = this.overlay.querySelector('.preloader-title');
        this.statusMsg = this.overlay.querySelector('.status-message');
        this.speedValue = this.overlay.getElementById('connection-speed');
        this.loadTime = this.overlay.getElementById('load-time');
        this.qualityOptions = this.overlay.getElementById('quality-options');
        this.errorState = this.overlay.getElementById('error-state');
        this.errorMsg = this.overlay.getElementById('error-message');
        this.retryBtn = this.overlay.getElementById('retry-btn');
        this.changeServerBtn = this.overlay.getElementById('change-server-btn');
        
        this.loadStartTime = null;
        this.connectionSpeed = null;
        this.testFileSize = 500000; // 500KB para prueba de velocidad
        this.currentProgress = 0;
        this.progressInterval = null;
        this.availableSources = [];
        this.currentSource = null;
        
        this.onRetryCallback = null;
        this.onServerChangeCallback = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.retryBtn.addEventListener('click', () => {
            if (this.onRetryCallback) this.onRetryCallback();
        });
        
        this.changeServerBtn.addEventListener('click', () => {
            this.showQualityOptions();
        });
    }
    
    show(title, sources) {
        this.availableSources = sources;
        this.currentSource = sources[0];
        this.loadStartTime = performance.now();
        this.currentProgress = 0;
        
        this.title.textContent = title || 'Cargando contenido';
        this.statusMsg.textContent = 'Conectando con el servidor...';
        this.speedValue.textContent = '0 Mbps';
        this.loadTime.textContent = '0s';
        this.errorState.style.display = 'none';
        
        this.updateProgress(0);
        this.overlay.classList.add('active');
        
        this.testConnectionSpeed();
        this.startProgressSimulation();
    }
    
    hide() {
        clearInterval(this.progressInterval);
        this.overlay.classList.remove('active');
    }
    
    updateProgress(percent) {
        this.currentProgress = percent;
        const offset = 283 - (283 * percent) / 100;
        this.progressFill.style.strokeDashoffset = offset;
    }
    
    startProgressSimulation() {
        clearInterval(this.progressInterval);
        
        this.progressInterval = setInterval(() => {
            if (this.currentProgress < 90) {
                this.currentProgress += 2;
                this.updateProgress(this.currentProgress);
                
                if (this.currentProgress > 50) {
                    this.statusMsg.textContent = 'Preparando para reproducir...';
                }
            }
        }, 200);
    }
    
    testConnectionSpeed() {
        const startTime = performance.now();
        const testUrl = `https://httpbin.org/bytes/${this.testFileSize}?rand=${Math.random()}`;
        
        fetch(testUrl, { cache: 'no-store' })
            .then(response => {
                const endTime = performance.now();
                const duration = (endTime - startTime) / 1000; // en segundos
                const bitsLoaded = this.testFileSize * 8;
                const speedMbps = ((bitsLoaded / duration) / 1000000).toFixed(2);
                
                this.connectionSpeed = speedMbps;
                this.speedValue.textContent = `${speedMbps} Mbps`;
                
                if (speedMbps < 2) {
                    this.showWarning('Tu conexión es lenta. La reproducción puede tener problemas.');
                }
            })
            .catch(() => {
                this.connectionSpeed = null;
                this.speedValue.textContent = 'No medida';
            });
    }
    
    showQualityOptions() {
        this.qualityOptions.innerHTML = '';
        
        this.availableSources.forEach(source => {
            const option = document.createElement('div');
            option.className = 'quality-option';
            option.textContent = source.resolution;
            option.addEventListener('click', () => {
                this.currentSource = source;
                if (this.onServerChangeCallback) {
                    this.onServerChangeCallback(source);
                }
            });
            this.qualityOptions.appendChild(option);
        });
        
        this.errorState.style.display = 'none';
    }
    
    showError(message) {
        this.errorMsg.textContent = message || 'Error al cargar el contenido';
        this.errorState.style.display = 'block';
        this.spinner.style.display = 'none';
        clearInterval(this.progressInterval);
    }
    
    showWarning(message) {
        const warningElement = document.createElement('div');
        warningElement.className = 'warning-message';
        warningElement.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <span>${message}</span>
        `;
        
        this.statusMsg.parentNode.insertBefore(warningElement, this.statusMsg.nextSibling);
        
        setTimeout(() => {
            if (warningElement.parentNode) {
                warningElement.parentNode.removeChild(warningElement);
            }
        }, 5000);
    }
    
    completeLoad() {
        clearInterval(this.progressInterval);
        this.updateProgress(100);
        this.statusMsg.textContent = '¡Contenido listo!';
        
        setTimeout(() => {
            this.hide();
        }, 500);
    }
    
    setOnRetry(callback) {
        this.onRetryCallback = callback;
    }
    
    setOnServerChange(callback) {
        this.onServerChangeCallback = callback;
    }
}

// Inicializar preloader global
window.proPreloader = new ProfessionalPreloader();