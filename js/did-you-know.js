// Carrousel "Le saviez-vous ?"
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.did-you-know-carousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.dyk-slide');
    const dots = carousel.querySelectorAll('.dyk-dot');
    const prevBtn = carousel.querySelector('.dyk-prev');
    const nextBtn = carousel.querySelector('.dyk-next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;

    // Fonction pour afficher une slide spécifique
    function showSlide(index) {
        // Normaliser l'index
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        // Masquer toutes les slides
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.display = 'none';
            slide.style.opacity = '0';
        });

        // Afficher la slide active avec animation
        slides[currentSlide].style.display = 'block';
        setTimeout(() => {
            slides[currentSlide].classList.add('active');
            slides[currentSlide].style.opacity = '1';
        }, 10);

        // Mettre à jour les indicateurs
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
                dot.style.background = 'var(--turquoise)';
                dot.style.transform = 'scale(1.2)';
            } else {
                dot.classList.remove('active');
                dot.style.background = 'var(--medium-grey)';
                dot.style.transform = 'scale(1)';
            }
        });
    }

    // Navigation suivant
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Navigation précédent
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 6000); // Change toutes les 6 secondes
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay(); // Redémarre l'auto-play après interaction
        });

        // Effet hover sur les boutons
        nextBtn.addEventListener('mouseenter', () => {
            nextBtn.style.background = 'var(--turquoise)';
            nextBtn.style.color = 'white';
        });
        nextBtn.addEventListener('mouseleave', () => {
            nextBtn.style.background = 'white';
            nextBtn.style.color = 'var(--turquoise)';
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });

        // Effet hover sur les boutons
        prevBtn.addEventListener('mouseenter', () => {
            prevBtn.style.background = 'var(--turquoise)';
            prevBtn.style.color = 'white';
        });
        prevBtn.addEventListener('mouseleave', () => {
            prevBtn.style.background = 'white';
            prevBtn.style.color = 'var(--turquoise)';
        });
    }

    // Navigation par les dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoPlay();
            startAutoPlay();
        });

        // Effet hover sur les dots
        dot.addEventListener('mouseenter', () => {
            if (index !== currentSlide) {
                dot.style.background = 'var(--ocean-blue)';
            }
        });
        dot.addEventListener('mouseleave', () => {
            if (index !== currentSlide) {
                dot.style.background = 'var(--medium-grey)';
            }
        });
    });

    // Pause auto-play au survol
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Initialisation
    showSlide(0);
    startAutoPlay();

    // Support du swipe sur mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe gauche
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe droite
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        }
    }
});
