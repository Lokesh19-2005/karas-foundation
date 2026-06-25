/* ============================================
   KARAS FOUNDATION - Animations JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for hero section
    const hero = document.querySelector('.hero-section');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                hero.style.backgroundPositionY = scrolled * 0.4 + 'px';
            }
        });
    }

    // Add hover lift class to cards on load
    const cards = document.querySelectorAll('.focus-card, .why-card, .program-card, .team-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });

    // Navbar active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const btn = this.querySelector('button[type="submit"]');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';
            btn.disabled = true;
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            if (input.value) {
                alert('Thank you for subscribing! We will keep you updated.');
                input.value = '';
            }
        });
    }
});
