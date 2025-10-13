// Animações para o site

// Função para animar barras de progresso
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Função para animar seções com fade-in
function animateSections() {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Alternar entre esquerda e direita
                if (index % 2 === 0) {
                    entry.target.classList.add('fade-in-left');
                } else {
                    entry.target.classList.add('fade-in-right');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Função para animar títulos das seções
function animateTitles() {
    const titles = document.querySelectorAll('section[id] h2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Alternar animações para títulos
                const animations = ['fade-in-left', 'fade-in-right', 'fade-in-top'];
                const animationClass = animations[index % animations.length];
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    titles.forEach(title => {
        observer.observe(title);
    });
}

// Função para animar textos (parágrafos, listas)
function animateTexts() {
    const texts = document.querySelectorAll('section[id] p, section[id] ul, section[id] div');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Alternar animações para textos
                const animations = ['fade-in-left', 'fade-in-right', 'fade-in-top', 'fade-in-bottom'];
                const animationClass = animations[index % animations.length];
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    texts.forEach(text => {
        observer.observe(text);
    });
}

// Função para animar imagens
function animateImages() {
    const images = document.querySelectorAll('img');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-image');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => {
        observer.observe(img);
    });
}

// Função para animar containers (cards, divs)
function animateContainers() {
    const containers = document.querySelectorAll('.card, .shadow, .row');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('zoom-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    containers.forEach(container => {
        observer.observe(container);
    });
}

// Função para animar elementos da seção início
function animateInicio() {
    const nameElement = document.querySelector('section#inicio h2');
    const subtitleElement = document.querySelector('section#inicio span#subtitle');

    if (nameElement) {
        nameElement.classList.add('fade-in-top');
    }
    if (subtitleElement) {
        subtitleElement.classList.add('fade-in-bottom');
    }
}

// Inicializar animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    animateProgressBars();
    animateSections();
    animateTitles();
    animateTexts();
    animateImages();
    animateContainers();
    animateInicio();
});
