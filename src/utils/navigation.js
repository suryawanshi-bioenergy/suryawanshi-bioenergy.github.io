export const initNavigation = () => {
    document.querySelectorAll('.nav-links a, .hero-btns a').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
};

export const initShowcase = () => {
    const tabs = document.querySelectorAll('.showcase-tab');
    const slides = document.querySelectorAll('.showcase-slide');

    if (!tabs.length || !slides.length) return;

    const goToSlide = (index) => {
        tabs.forEach(tab => tab.classList.remove('active'));
        slides.forEach(slide => slide.classList.remove('active'));

        if (tabs[index]) tabs[index].classList.add('active');
        if (slides[index]) slides[index].classList.add('active');
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            goToSlide(index);
        });
    });
};

export const initProductCarousel = () => {
    const slides = document.querySelectorAll('.prod-slide');
    const prevBtn = document.querySelector('.prod-nav-btn.prev');
    const nextBtn = document.querySelector('.prod-nav-btn.next');
    
    if (!slides.length || !prevBtn || !nextBtn) return;

    let activeIndex = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;

    const goToSlide = (index, direction = 'next') => {
        let targetIndex = index;
        if (targetIndex >= totalSlides) targetIndex = 0;
        if (targetIndex < 0) targetIndex = totalSlides - 1;

        slides.forEach(slide => {
            if (slide.classList.contains('active') || slide.classList.contains('active-reverse')) {
                slide.classList.remove('active', 'active-reverse');
                slide.classList.add(direction === 'next' ? 'exit' : 'exit-reverse');
            } else {
                slide.classList.remove('exit', 'exit-reverse');
            }
        });

        activeIndex = targetIndex;

        slides[activeIndex].classList.remove('exit', 'exit-reverse');
        slides[activeIndex].classList.add(direction === 'next' ? 'active' : 'active-reverse');
    };

    const nextSlide = () => goToSlide(activeIndex + 1, 'next');
    const prevSlide = () => goToSlide(activeIndex - 1, 'prev');

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    const startAutoPlay = () => {
        autoPlayInterval = setInterval(nextSlide, 5000);
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };

    startAutoPlay();
};
