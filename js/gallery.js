// Slider et Lightbox pour la galerie InSail80
document.addEventListener('DOMContentLoaded', function() {
    // Slider
    const sliderImages = document.querySelectorAll('.slider-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentIndex = 0;
    
    if (sliderImages.length > 0) {
        // Créer les dots
        sliderImages.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        const dots = document.querySelectorAll('.slider-dot');
        
        function showSlide(index) {
            sliderImages.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            sliderImages[index].classList.add('active');
            dots[index].classList.add('active');
            currentIndex = index;
        }
        
        function nextSlide() {
            const next = (currentIndex + 1) % sliderImages.length;
            showSlide(next);
        }
        
        function prevSlide() {
            const prev = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
            showSlide(prev);
        }
        
        function goToSlide(index) {
            showSlide(index);
        }
        
        // Event listeners pour les boutons
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        
        // Auto-play (optionnel)
        let autoplayInterval = setInterval(nextSlide, 5000);
        
        // Pause au hover
        const sliderContainer = document.querySelector('.image-slider');
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });
        
        sliderContainer.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(nextSlide, 5000);
        });
        
        // Ouvrir lightbox au clic sur une image du slider
        sliderImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                openLightbox(index, Array.from(sliderImages));
            });
        });
    }
    
    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    const lightboxCounter = document.querySelector('.lightbox-counter');
    
    let lightboxImages = [];
    let lightboxIndex = 0;
    
    function openLightbox(index, images) {
        lightboxImages = images;
        lightboxIndex = index;
        showLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showLightboxImage() {
        const img = lightboxImages[lightboxIndex];
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
    }
    
    function nextLightboxImage() {
        lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
        showLightboxImage();
    }
    
    function prevLightboxImage() {
        lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
        showLightboxImage();
    }
    
    // Event listeners lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevLightboxImage);
    lightboxNext.addEventListener('click', nextLightboxImage);
    
    // Fermer au clic sur le fond
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevLightboxImage();
        if (e.key === 'ArrowRight') nextLightboxImage();
    });
    
    // Lightbox pour les images de la galerie
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', () => {
            openLightbox(index, Array.from(galleryItems));
        });
    });
});
