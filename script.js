
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.classList.remove('no-js');
    initNavigation();
    initTypingEffect();
    initParticles();
    initScrollAnimations();
    initCounters();
    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll);
});


function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    updateActiveNavigation();
    window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes('#') && !link.classList.contains('active')) {
            if (href === `#${currentSection}` || href.endsWith(`#${currentSection}`)) {
                link.classList.add('active');
            }
        } else if (href && href.includes('#')) {
            if (href !== `#${currentSection}` && !href.endsWith(`#${currentSection}`)) {
                // Only remove active if it was set by scroll, not by page
                if (!link.getAttribute('href').includes('.html')) {
                    link.classList.remove('active');
                }
            }
        }
    });
}

function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.3)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}


function initTypingEffect() {
    const texts = [
        'Administrateur systèmes',
        'Administrateur réseaux',
        'Technicien datacenter'
    ];

    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(typeText, typeSpeed);
    }

    typeText();
}


function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particle.style.opacity = Math.random() * 0.4 + 0.1;

        const colors = ['#00d4ff', '#00ff88', '#ff0080'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        particlesContainer.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 6000);
    }

    setInterval(createParticle, 400);
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}


function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);

                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


let konamiCode = [];
const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight"
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);

    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }

    if (konamiCode.length === konamiSequence.length &&
        konamiCode.every((code, index) => code === konamiSequence[index])) {
        activateMatrixMode();
        konamiCode = [];
    }
});

function activateMatrixMode() {
    document.body.style.filter = 'hue-rotate(120deg) saturate(2)';

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createMatrixChar();
        }, i * 100);
    }

    setTimeout(() => {
        document.body.style.filter = '';
    }, 8000);
}

function createMatrixChar() {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const char = document.createElement('div');

    char.textContent = chars[Math.floor(Math.random() * chars.length)];
    char.style.position = 'fixed';
    char.style.top = '-20px';
    char.style.left = Math.random() * window.innerWidth + 'px';
    char.style.color = '#00ff88';
    char.style.fontSize = '20px';
    char.style.fontFamily = 'monospace';
    char.style.zIndex = '9999';
    char.style.pointerEvents = 'none';
    char.style.animation = 'matrixFall 3s linear forwards';

    document.body.appendChild(char);

    setTimeout(() => {
        if (char.parentNode) {
            char.parentNode.removeChild(char);
        }
    }, 2000);
}

const matrixStyle = document.createElement('style');
matrixStyle.textContent = `
    @keyframes matrixFall {
        to {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(matrixStyle);
