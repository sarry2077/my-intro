document.addEventListener('DOMContentLoaded', () => {
    const blobs = document.querySelectorAll('.blob');
    
    // Mouse move parallax effect
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (x * speed) - (speed / 2);
            const yOffset = (y * speed) - (speed / 2);
            
            // Keep the original animation but add a slight transform based on mouse
            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Intersection Observer for scroll animations (if we add more content later)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.glass-card').forEach(card => {
        // Initial setup for cards is handled by CSS animations
        // This observer is useful if we scroll down to newly revealed cards
        observer.observe(card);
    });
});
