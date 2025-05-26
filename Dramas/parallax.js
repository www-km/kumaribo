document.addEventListener('DOMContentLoaded', function() {
    // Configuración del efecto parallax
    const parallaxIntensity = 20; // Intensidad aumentada para mejor efecto
    const body = document.body;
    
    // Crear elementos dinámicos para el fondo
    const createBackgroundElements = () => {
        // Capas adicionales dinámicas
        const layer1 = document.createElement('div');
        layer1.className = 'parallax-layer layer-1';
        body.appendChild(layer1);
        
        const layer2 = document.createElement('div');
        layer2.className = 'parallax-layer layer-2';
        body.appendChild(layer2);
        
        // Capa de partículas
        const particles = document.createElement('div');
        particles.className = 'parallax-layer particles';
        body.appendChild(particles);
        
        // Aplicar estilos iniciales
        applyLayerStyles();
        createParticles();
    };
    
    // Crear partículas flotantes
    const createParticles = () => {
        const particlesContainer = document.querySelector('.particles');
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Posición aleatoria
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Tamaño aleatorio entre 1px y 3px
            const size = Math.random() * 2 + 1;
            
            // Opacidad aleatoria
            const opacity = Math.random() * 0.5 + 0.1;
            
            // Tiempo de animación aleatorio
            const duration = Math.random() * 20 + 10;
            
            // Estilo de la partícula
            particle.style.position = 'absolute';
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = 'rgba(139, 0, 0, 0.7)';
            particle.style.borderRadius = '50%';
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = opacity;
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '-1';
            
            // Animación flotante
            particle.style.animation = `float ${duration}s infinite ease-in-out`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            
            particlesContainer.appendChild(particle);
        }
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
        
        // Estilo para partículas
        const particles = document.querySelector('.particles');
        particles.style.overflow = 'hidden';
    };
    
    // Manejador del efecto parallax
    const handleParallax = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * parallaxIntensity * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * parallaxIntensity;
        
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

// Animación de partículas flotantes
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(5px, 5px);
        }
        50% {
            transform: translate(10px, 0);
        }
        75% {
            transform: translate(5px, -5px);
        }
    }
`;
document.head.appendChild(style);