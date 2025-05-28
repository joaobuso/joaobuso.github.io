// Funções para animações e interatividade
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Animação de partículas
    const particlesContainers = document.querySelectorAll('.particles');
    
    particlesContainers.forEach(container => {
        createParticles(container);
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Efeito de digitação na página inicial
    const heroTitle = document.querySelector('.hero-content h1');
    
    if (heroTitle && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    
    // Animação de scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.expertise-card, .feature-item, .benefit-card, .contact-item, .timeline-item, .step');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Iniciar animação para elementos já visíveis
});

// Função para criar partículas
function createParticles(container) {
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Estilo aleatório para cada partícula
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.5})`;
        
        // Posição aleatória
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Animação aleatória
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.animation = `float ${duration}s ${delay}s infinite linear`;
        
        container.appendChild(particle);
    }
}

// Adicionar estilos CSS para partículas
const particleStyles = document.createElement('style');
particleStyles.innerHTML = `
    .particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
    }
    
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .expertise-card, .feature-item, .benefit-card, .contact-item, .timeline-item, .step {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .expertise-card.animate, .feature-item.animate, .benefit-card.animate, .contact-item.animate, .timeline-item.animate, .step.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(particleStyles);
