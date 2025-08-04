// academics.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Counter animation for numbers
    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        const speed = 200; // The lower the faster
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
                // Add decimal for AP score
                if (counter.classList.contains('achievement-number') && target === 4.2) {
                    counter.innerText = target.toFixed(1);
                }
                // Add % for percentage values
                if (counter.classList.contains('achievement-number') && (target === 98 || target === 85)) {
                    counter.innerText += '%';
                }
            }
        });
    }

    // Scroll animations
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                const animation = element.getAttribute('data-animation');
                const delay = element.getAttribute('data-delay') || 0;
                
                // Apply animation with delay
                setTimeout(() => {
                    element.classList.add(animation);
                    
                    // Start counter animation for numbers
                    if (element.querySelector('[data-count]')) {
                        animateCounters();
                    }
                }, delay);
            }
        });
    }

    // Initialize animations on load
    animateOnScroll();
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);

    // Back to top button
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Program level cards hover effect
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Testimonials slider (if added later)
    // This is a placeholder for potential future functionality
    /*
    const testimonials = [
        {
            quote: "Evergreen's IB program prepared me perfectly for university.",
            author: "Sarah Johnson, Class of 2022"
        },
        {
            quote: "The teachers go above and beyond to support every student.",
            author: "Michael Chen, Parent"
        }
    ];
    */
});