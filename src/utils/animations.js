export const initAnimations = () => {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, we can stop observing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial simple reveals
    document.querySelectorAll('[class*="reveal"]').forEach(el => {
        // Skip children of stagger containers, they are handled separately
        if (!el.closest('.stagger-container')) {
            observer.observe(el);
        }
    });

    // Staggered reveals
    document.querySelectorAll('.stagger-container').forEach(container => {
        const children = container.children;
        Array.from(children).forEach((child, index) => {
            child.style.setProperty('--delay', `${index * 0.15}s`);
            child.classList.add('reveal'); // Ensure children have base reveal styles
            observer.observe(child);
        });
    });
};
