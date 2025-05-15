document.addEventListener('DOMContentLoaded', function() {
    // Configuración del efecto parallax
    const parallaxIntensity = 15; // Ajusta la intensidad del efecto (en píxeles)
    const body = document.body;
    
    // Crear elementos dinámicos para el fondo
    const createBackgroundElements = () => {
        // Capa base (ya definida en el CSS)
        
        // Capas adicionales dinámicas
        const layer1 = document.createElement('div');
        layer1.className = 'parallax-layer layer-1';
        body.appendChild(layer1);
        
        const layer2 = document.createElement('div');
        layer2.className = 'parallax-layer layer-2';
        body.appendChild(layer2);
        
        // Aplicar estilos iniciales
        applyLayerStyles();
    };
    
    // Aplicar estilos a las capas
    const applyLayerStyles = () => {
        const layers = document.querySelectorAll('.parallax-layer');
        
        layers.forEach(layer => {
            layer.style.position = 'fixed';
            layer.style.top = '0';
            layer.style.left = '0';
            layer.style.width = '100%';
            layer.style.height = '100%';
            layer.style.zIndex = '-1';
            layer.style.pointerEvents = 'none';
            layer.style.willChange = 'transform';
            layer.style.transition = 'transform 0.1s linear';
        });
        
        // Estilos específicos para cada capa
        document.querySelector('.layer-1').style.background = 
            'radial-gradient(circle at 30% 40%, rgba(52, 152, 219, 0.15) 0%, transparent 40%)';
        
        document.querySelector('.layer-2').style.background = 
            'radial-gradient(circle at 70% 60%, rgba(231, 76, 60, 0.15) 0%, transparent 40%)';
    };
    
    // Manejador del efecto parallax
    const handleParallax = (e) => {
        const x = (e.clientX / window.innerWidth) * parallaxIntensity;
        const y = (e.clientY / window.innerHeight) * parallaxIntensity;
        
        const layer1 = document.querySelector('.layer-1');
        const layer2 = document.querySelector('.layer-2');
        
        if (layer1 && layer2) {
            layer1.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
            layer2.style.transform = `translate(${-x * 0.3}px, ${-y * 0.3}px)`;
        }
    };
    
    // Versión para dispositivos móviles (usando orientación)
    const handleMobileParallax = (e) => {
        const beta = e.beta * 0.1;  // Inclinación frontal (móvil)
        const gamma = e.gamma * 0.1; // Inclinación lateral (móvil)
        
        const layer1 = document.querySelector('.layer-1');
        const layer2 = document.querySelector('.layer-2');
        
        if (layer1 && layer2) {
            layer1.style.transform = `translate(${gamma * 2}px, ${beta * 2}px)`;
            layer2.style.transform = `translate(${-gamma * 1.5}px, ${-beta * 1.5}px)`;
        }
    };
    
    // Inicialización
    createBackgroundElements();
    
    // Event listeners
    if (window.matchMedia("(pointer: fine)").matches) {
        // Para dispositivos con mouse
        document.addEventListener('mousemove', handleParallax);
    } else {
        // Para dispositivos móviles
        window.addEventListener('deviceorientation', handleMobileParallax);
    }
    
    // Ajustar para cuando el dispositivo cambie de orientación
    window.addEventListener('resize', () => {
        document.querySelectorAll('.parallax-layer').forEach(layer => {
            layer.style.transform = 'translate(0, 0)';
        });
    });
});