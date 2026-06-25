/* ============================================
   KARAS FOUNDATION - Animations JavaScript
   Parallax, Active Nav, Form Handlers
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ============ PARALLAX HERO (rAF optimized) ============
    var hero = document.querySelector('.hero-section');
    if (hero) {
        var parallaxTicking = false;

        window.addEventListener('scroll', function () {
            if (parallaxTicking) return;
            parallaxTicking = true;

            requestAnimationFrame(function () {
                var scrolled = window.scrollY;
                if (scrolled < window.innerHeight) {
                    hero.style.backgroundPositionY = scrolled * 0.4 + 'px';
                }
                parallaxTicking = false;
            });
        }, { passive: true });
    }

    // ============ ACTIVE NAV LINK ============
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // ============ CONTACT FORM HANDLER ============
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function () {
            var btn = this.querySelector('button[type="submit"]');
            if (btn) {
                btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';
                btn.disabled = true;
            }
        });
    }

    // ============ NEWSLETTER FORM ============
    var newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var input = this.querySelector('input[type="email"]');
            if (input && input.value) {
                alert('Thank you for subscribing! We will keep you updated.');
                input.value = '';
            }
        });
    }
});
