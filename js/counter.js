/* ============================================
   KARAS FOUNDATION - Counter Animation
   IntersectionObserver + requestAnimationFrame
   ============================================ */

function animateCounters() {
    var counters = document.querySelectorAll('.counter-number');

    counters.forEach(function (counter) {
        var target = parseInt(counter.getAttribute('data-target'), 10);
        var duration = 2000;
        var step = target / (duration / 16);
        var current = 0;

        function updateCounter() {
            current += step;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }

        updateCounter();
    });
}

function initCounterObserver() {
    var counterSection = document.querySelector('.counter-section');
    if (!counterSection) return;

    var animated = false;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(counterSection);
}

document.addEventListener('DOMContentLoaded', initCounterObserver);
