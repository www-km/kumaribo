// Versión simplificada con protección básica
const base64Encoded = "aHR0cHM6Ly90aW55dXJsLmNvbS8yYnZxc2RnMg==";
let secureStreamUrl;

try {
    secureStreamUrl = atob(base64Encoded);
    
    // Validación básica de URL
    if (!secureStreamUrl.startsWith('http')) {
        throw new Error('URL inválida');
    }
} catch (e) {
    console.error('Error al decodificar la URL:', e);
    secureStreamUrl = '';
    
    // Mostrar error en pantalla
    document.addEventListener('DOMContentLoaded', () => {
        const errorElement = document.getElementById('error');
        if (errorElement) {
            errorElement.textContent = 'Error: URL de transmisión no válida';
            errorElement.style.display = 'flex';
        }
    });
}

// Protección básica contra apertura de DevTools
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});
