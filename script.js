ScrollReveal({
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: false
});

ScrollReveal().reveal('.hero-content', { origin: 'left' });
ScrollReveal().reveal('.hero-image', { origin: 'right' });
ScrollReveal().reveal('.section h2', { origin: 'top' });
ScrollReveal().reveal('.skill-card', { interval: 100 });
ScrollReveal().reveal('.project-card', { interval: 200 });
ScrollReveal().reveal('#contact', { origin: 'bottom' });