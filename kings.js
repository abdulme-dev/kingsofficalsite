// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.getAttribute('href') === '#') return;

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// News Slider Navigation
const sliderDots = document.querySelectorAll('.slider-dot');
const newsSlider = document.querySelector('.news-slider');

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Update active dot
        sliderDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        // Scroll to corresponding item
        const itemWidth = document.querySelector('.news-item').offsetWidth + 30;
        newsSlider.scrollTo({
            left: index * itemWidth,
            behavior: 'smooth'
        });
    });
});

let currentSlide = 0;
setInterval(() => {
    currentSlide = (currentSlide + 1) % sliderDots.length;
    sliderDots.forEach(d => d.classList.remove('active'));
    sliderDots[currentSlide].classList.add('active');

    const itemWidth = document.querySelector('.news-item').offsetWidth + 30;
    newsSlider.scrollTo({
        left: currentSlide * itemWidth,
        behavior: 'smooth'
    });
}, 5000);

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.mission-content, .mission-image, .program-card, .testimonial-card');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

document.querySelectorAll('.mission-content, .mission-image, .program-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);