/* ============================================
   MAIN.JS – Shared logic across all pages
   Header scroll · Hamburger · IntersectionObserver · Custom Cursor
   ============================================ */

(function () {
    'use strict';

    // ---- Custom Cursor ----
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    if (dot && ring) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        }, { passive: true });

        // Ring follows with a slight lag
        function animateCursor() {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Cursor states on interactive elements
        document.querySelectorAll('a, button, input, textarea, .project-card, .stat-card, .service-card').forEach((el) => {
            el.addEventListener('mouseenter', () => {
                dot.style.width = '12px';
                dot.style.height = '12px';
                ring.style.width = '50px';
                ring.style.height = '50px';
                ring.style.borderColor = 'rgba(59, 130, 246, 0.85)';
            });
            el.addEventListener('mouseleave', () => {
                dot.style.width = '8px';
                dot.style.height = '8px';
                ring.style.width = '34px';
                ring.style.height = '34px';
                ring.style.borderColor = 'rgba(59, 130, 246, 0.55)';
            });
        });

        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            dot.style.opacity = '0';
            ring.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            dot.style.opacity = '1';
            ring.style.opacity = '1';
        });
    }

    // ---- Header Scroll Effect ----
    const header = document.querySelector('.header');
    const SCROLL_THRESHOLD = 80;

    function onScroll() {
        if (!header) return;
        if (window.scrollY > SCROLL_THRESHOLD) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ---- Mobile Hamburger Toggle ----
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.nav-overlay');

    function closeNav() {
        if (!hamburger) return;
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
            if (overlay) overlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });

        if (overlay) overlay.addEventListener('click', closeNav);

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', closeNav);
        });
    }

    // ---- IntersectionObserver ----
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');

                // Skill bar fill
                const fill = entry.target.querySelector('.skill-bar-fill');
                if (fill && fill.dataset.level) {
                    fill.style.width = fill.dataset.level + '%';
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in, .timeline-entry, .skill-bar-group').forEach((el) => {
        observer.observe(el);
    });

    // ---- Active Nav Link ----
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach((link) => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

})();
