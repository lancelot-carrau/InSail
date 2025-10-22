// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector('.header');
    
    // Mots dynamiques pour le hero
    const dynamicWords = [
        'Regenerative',
        'Sustainable',
        'Smart',
        'Respectful',
        'Innovative',
        'Clean',
        'Efficient'
    ];
    let currentWordIndex = 0;
    const dynamicWordElement = document.getElementById('dynamic-word');
    
    // Fonction pour changer le mot
    function changeWord() {
        if (dynamicWordElement) {
            // Fade out
            dynamicWordElement.style.opacity = '0';
            dynamicWordElement.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                currentWordIndex = (currentWordIndex + 1) % dynamicWords.length;
                dynamicWordElement.textContent = dynamicWords[currentWordIndex];
                
                // Fade in
                dynamicWordElement.style.opacity = '1';
                dynamicWordElement.style.transform = 'translateY(0)';
            }, 300);
        }
    }
    
    // Changer le mot toutes les 3 secondes
    setInterval(changeWord, 3000);
    
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
    document.querySelectorAll('.stat-item, .service-card').forEach(el => {
        observer.observe(el);
    });
});