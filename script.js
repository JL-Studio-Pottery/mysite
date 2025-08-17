// ===== SCROLL ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe gallery items individually
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        observer.observe(item);
    });
    
    // ===== GALLERY IMAGE LOADING =====
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(img => {
        // Handle image load
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // Handle image error
        img.addEventListener('error', function() {
            this.style.filter = 'grayscale(100%)';
            console.warn('Image failed to load:', this.src);
        });
    });
    
    // ===== NAVIGATION INTERACTIONS =====
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Add subtle hover effect
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'color 0.3s ease';
        });
        
        // Ensure proper focus management
        link.addEventListener('focus', function() {
            this.style.outline = '2px solid #192A51';
            this.style.outlineOffset = '2px';
        });
        
        link.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // ===== STOCKIST LINKS ENHANCEMENT =====
    const stockistLinks = document.querySelectorAll('.stockist-link');
    
    stockistLinks.forEach(link => {
        // Add subtle hover effect
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        // Ensure proper focus management
        link.addEventListener('focus', function() {
            this.style.outline = '2px solid #192A51';
            this.style.outlineOffset = '2px';
        });
        
        link.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // ===== SMOOTH SCROLLING =====
    // Handle smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== PERFORMANCE OPTIMIZATION =====
    // Debounce scroll events for better performance
    let ticking = false;
    
    function updateOnScroll() {
        // Any scroll-based updates can go here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    // Only add scroll listener if needed for future enhancements
    // window.addEventListener('scroll', requestTick);
    
    // ===== ACCESSIBILITY ENHANCEMENTS =====
    // Ensure proper focus management
    document.addEventListener('keydown', function(e) {
        // Escape key to close any potential modals or overlays
        if (e.key === 'Escape') {
            // Future modal functionality can be added here
        }
    });
    
    // ===== REDUCED MOTION SUPPORT =====
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.body.classList.add('reduced-motion');
    }
    
    // Listen for changes in motion preference
    prefersReducedMotion.addEventListener('change', function(e) {
        if (e.matches) {
            document.body.classList.add('reduced-motion');
        } else {
            document.body.classList.remove('reduced-motion');
        }
    });
    
    // ===== GALLERY LIGHTBOX (FUTURE ENHANCEMENT) =====
    // This can be expanded to add a lightbox feature for gallery images
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Future lightbox functionality can be added here
            console.log('Gallery item clicked - lightbox feature can be added');
        });
    });
    
    // ===== CONSOLE LOG FOR DEVELOPMENT =====
    console.log('JL Studio Pottery - European Classicism meets Modern Minimalism');
    console.log('Multi-page website loaded successfully');
});

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== EXPORT FOR FUTURE ENHANCEMENTS =====
// This allows for easy extension of functionality
window.JLStudioPottery = {
    init: function() {
        console.log('JL Studio Pottery initialized');
    },
    
    // Future methods can be added here
    scrollToSection: function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    },
    
    // Method to handle gallery lightbox
    openLightbox: function(imageSrc, imageAlt) {
        // Future lightbox implementation
        console.log('Opening lightbox for:', imageSrc);
    }
};
