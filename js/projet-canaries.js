// Navigation mobile, gestion audio et animations projet-canaries
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector('.header');
    
    // Gestion du scroll pour la navbar transparente
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Appeler au chargement et à chaque scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Fermer le menu mobile quand on clique sur un lien
        document.querySelectorAll('.nav-item a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Gestion des lecteurs audio pour éviter la lecture simultanée
    document.querySelectorAll('audio').forEach(audio => {
        audio.addEventListener('play', function() {
            // Pause tous les autres lecteurs audio
            document.querySelectorAll('audio').forEach(otherAudio => {
                if (otherAudio !== this && !otherAudio.paused) {
                    otherAudio.pause();
                }
            });
        });
    });

    // Animation des statistiques au scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    document.querySelectorAll('.stat-item, .card, .audio-player').forEach(el => {
        observer.observe(el);
    });
});