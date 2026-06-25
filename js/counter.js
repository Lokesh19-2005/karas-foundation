/* ============================================
   KARAS FOUNDATION - Counter Animation
   ============================================ */

function animateCounters() {
    const counters = document.querySelectorAll('.counter-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Intersection Observer for counters
function initCounterObserver() {
    const counterSection = document.querySelector('.counter-section');
    if (!counterSection) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(counterSection);
}

document.addEventListener('DOMContentLoaded', initCounterObserver);
