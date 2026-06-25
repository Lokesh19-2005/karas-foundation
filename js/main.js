/* ============================================
   KARAS FOUNDATION - Main JavaScript
   Optimized: rAF scroll handler, debounced events
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ============ AOS INIT ============
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // ============ DOM REFERENCES ============
    const navbar = document.getElementById('mainNavbar');
    const scrollProgress = document.getElementById('scrollProgress');
    const backToTop = document.getElementById('backToTop');

    // ============ SCROLL HANDLER (rAF optimized) ============
    let ticking = false;

    function onScroll() {
        if (ticking) return;
        ticking = true;

        requestAnimationFrame(function () {
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

            // Navbar background toggle
            if (navbar) {
                if (scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }

            // Scroll progress bar
            if (scrollProgress) {
                scrollProgress.style.width = scrollPercent + '%';
            }

            // Back to top visibility
            if (backToTop) {
                if (scrollY > 400) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            }

            ticking = false;
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ============ BACK TO TOP ============
    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============ SMOOTH SCROLL FOR ANCHORS ============
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
