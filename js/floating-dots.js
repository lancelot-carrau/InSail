// Génération des points flottants pour le hero background
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section.main-hero');
    
    if (heroSection) {
        // Créer le conteneur pour les points
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'floating-dots';
        
        // Générer 50 points flottants
        for (let i = 1; i <= 50; i++) {
            const dotWrapper = document.createElement('div');
            dotWrapper.className = `dotWrapper dotWrapper-${i}`;
            
            const dot = document.createElement('div');
            dot.className = `dot dot-${i}`;
            
            // Position aléatoire
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            dotWrapper.style.top = `${top}%`;
            dotWrapper.style.left = `${left}%`;
            
            // Animation aléatoire
            const flyingDuration = (Math.random() * 50 + 20).toFixed(1);
            const flyingDelay = (Math.random() * 10 - 5).toFixed(1);
            dotWrapper.style.animation = `flying ${flyingDuration}s ease-in-out ${flyingDelay}s infinite alternate`;
            
            const rotatingDuration = (Math.random() * 20 + 10).toFixed(1);
            const rotatingDelay = (Math.random() * 10 - 5).toFixed(1);
            const transformOriginX = (Math.random() * 30 - 15).toFixed(1);
            const transformOriginY = (Math.random() * 30 - 15).toFixed(1);
            dot.style.transformOrigin = `${transformOriginX}px ${transformOriginY}px`;
            dot.style.animation = `rotating ${rotatingDuration}s ease-in-out ${rotatingDelay}s infinite`;
            
            dotWrapper.appendChild(dot);
            dotsContainer.appendChild(dotWrapper);
        }
        
        // Insérer le conteneur dans le hero (après la vidéo)
        const video = heroSection.querySelector('video');
        if (video) {
            video.parentNode.insertBefore(dotsContainer, video.nextSibling);
        } else {
            heroSection.insertBefore(dotsContainer, heroSection.firstChild);
        }
    }
});
