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

const typingText = " Hello, I'm";
const typingSpeed = 200;
let typingIndex = 0;

function typeEffect() {
    const element = document.getElementById("typing-text");

    if (!element) return; // prevents errors if element not found

    if (typingIndex < typingText.length) {
        element.textContent += typingText.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeEffect, typingSpeed);
    }
}

// run after page loads
document.addEventListener("DOMContentLoaded", typeEffect);

// experience duration update
function updateDuration(startYear, startMonth, elementId) {
    const start = new Date(startYear, startMonth - 1);
    const now = new Date();

    let totalMonths =
        (now.getFullYear() - start.getFullYear()) * 12 +
        (now.getMonth() - start.getMonth());

    if (totalMonths < 0) totalMonths = 0;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let result = "";

    if (years > 0) {
        result += years + (years === 1 ? " yr " : " Years ");
    }

    if (months > 0 || years === 0) {
        result += months + (months === 1 ? " mo" : " Months ");
    }

    document.getElementById(elementId).textContent = result.trim();
}

document.addEventListener("DOMContentLoaded", function () {
    updateDuration(2025, 12, "associate-duration");
});

// Auto Update Footer Year Range
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year-range");

    console.log("yearSpan found:", yearSpan);

    if (!yearSpan) return;

    const startYear = 2025;
    const currentYear = new Date().getFullYear();

    yearSpan.textContent =
        startYear === currentYear
            ? currentYear
            : `${startYear}–${currentYear}`;
});

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".cert-filter-btn");
    const certCards = document.querySelectorAll(".cert-card");
    const searchInput = document.getElementById("cert-search");
    const noResults = document.getElementById("cert-no-results");

    // Guard – only run on certifications page
    if (!certCards.length) return;

    // ---- Auto-count Stats ----
    function computeStats() {
        const totalEl = document.getElementById("stat-total-certs");
        const platformsEl = document.getElementById("stat-platforms");
        const latestEl = document.getElementById("stat-latest-year");

        if (!totalEl) return;

        // Total certificates = number of cert-card elements
        const total = certCards.length;

        // Unique issuing platforms
        const issuers = new Set();
        certCards.forEach(card => {
            const issuerEl = card.querySelector(".cert-issuer");
            if (issuerEl) {
                // Strip icon text, get just the issuer name
                const name = issuerEl.textContent.trim().toLowerCase();
                issuers.add(name);
            }
        });

        // Latest credential year – parse from "Issued: Mon YYYY"
        let latestYear = 0;
        certCards.forEach(card => {
            const metaItems = card.querySelectorAll(".cert-meta-item");
            metaItems.forEach(item => {
                const text = item.textContent;
                const match = text.match(/Issued:\s*\w+\s+(\d{4})/);
                if (match) {
                    const year = parseInt(match[1], 10);
                    if (year > latestYear) latestYear = year;
                }
            });
        });

        // Animate count up
        animateCount(totalEl, total);
        animateCount(platformsEl, issuers.size);
        if (latestYear > 0) {
            animateCount(latestEl, latestYear);
        }
    }

    function animateCount(el, target) {
        if (!el) return;
        const duration = 1200;
        const start = performance.now();
        const startVal = 0;

        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(startVal + (target - startVal) * ease);
            el.textContent = current;
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    computeStats();

    // ---- Combined Filter + Search ----
    let activeFilter = "all";
    let searchQuery = "";

    function applyFilters() {
        let visibleCount = 0;

        certCards.forEach(card => {
            const category = card.getAttribute("data-category") || "";
            const matchesFilter = activeFilter === "all" || category === activeFilter;

            let matchesSearch = true;
            if (searchQuery) {
                const cardText = card.textContent.toLowerCase();
                matchesSearch = cardText.includes(searchQuery);
            }

            if (matchesFilter && matchesSearch) {
                card.style.display = "flex";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        // Show/hide no-results message
        if (noResults) {
            noResults.style.display = visibleCount === 0 ? "block" : "none";
        }
    }

    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            activeFilter = button.getAttribute("data-filter");
            applyFilters();
        });
    });

    // Search input
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            searchQuery = searchInput.value.trim().toLowerCase();
            applyFilters();
        });
    }

});