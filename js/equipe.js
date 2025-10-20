// Navigation mobile et animations équipe
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
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

    // Animation des cartes membres au scroll
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('slide-up')) {
                entry.target.style.animationDelay = `${Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.2}s`;
                entry.target.classList.add('slide-up');
                // Arrête d'observer cet élément une fois animé
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer les membres d'équipe
    document.querySelectorAll('.team-member').forEach(el => {
        observer.observe(el);
    });
});