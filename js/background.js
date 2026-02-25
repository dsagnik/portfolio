/* ============================================
   CANVAS PARTICLE NETWORK BACKGROUND
   Subtle, interactive, performance-optimized
   ============================================ */

(function () {
  'use strict';

  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // --- Configuration ---
  const CONFIG = {
    particleCount: 70,
    particleRadius: 1.5,
    maxSpeed: 0.35,
    connectionDistance: 140,
    mouseRepelRadius: 120,
    mouseRepelForce: 0.02,
    particleColor: 'rgba(148, 163, 184, 0.35)',
    lineColor: 'rgba(148, 163, 184, 0.07)',
    mouseMoveThrottle: 16, // ~60fps
  };

  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  let animationId = null;
  let isRunning = false;

  // --- Responsive: disable on small screens ---
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // --- Particle class ---
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * CONFIG.maxSpeed * 2;
      this.vy = (Math.random() - 0.5) * CONFIG.maxSpeed * 2;
    }

    update() {
      // Mouse repel
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < CONFIG.mouseRepelRadius && dist > 0) {
        const force = (CONFIG.mouseRepelRadius - dist) / CONFIG.mouseRepelRadius;
        this.vx += (dx / dist) * force * CONFIG.mouseRepelForce;
        this.vy += (dy / dist) * force * CONFIG.mouseRepelForce;
      }

      // Speed limit
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed > CONFIG.maxSpeed) {
        this.vx = (this.vx / speed) * CONFIG.maxSpeed;
        this.vy = (this.vy / speed) * CONFIG.maxSpeed;
      }

      this.x += this.vx;
      this.y += this.vy;

      // Wrap edges
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, CONFIG.particleRadius, 0, Math.PI * 2);
      ctx.fillStyle = CONFIG.particleColor;
      ctx.fill();
    }
  }

  // --- Initialize particles ---
  function initParticles() {
    particles = [];
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push(new Particle());
    }
  }

  // --- Draw connections ---
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.connectionDistance) {
          const opacity = 1 - dist / CONFIG.connectionDistance;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(148, 163, 184, ${0.07 * opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  // --- Animation loop ---
  function animate() {
    if (!isRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    drawConnections();
    animationId = requestAnimationFrame(animate);
  }

  function startAnimation() {
    if (isRunning) return;
    isRunning = true;
    animate();
  }

  function stopAnimation() {
    isRunning = false;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  // --- Throttled mouse move ---
  let lastMouseMove = 0;
  function onMouseMove(e) {
    const now = Date.now();
    if (now - lastMouseMove < CONFIG.mouseMoveThrottle) return;
    lastMouseMove = now;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  // --- Visibility change: pause when tab inactive ---
  function onVisibilityChange() {
    if (document.hidden) {
      stopAnimation();
    } else if (mediaQuery.matches) {
      startAnimation();
    }
  }

  // --- Handle media query changes ---
  function handleMediaChange(mq) {
    if (mq.matches) {
      resizeCanvas();
      initParticles();
      startAnimation();
      canvas.style.display = 'block';
    } else {
      stopAnimation();
      canvas.style.display = 'none';
    }
  }

  // --- Init ---
  function init() {
    if (!mediaQuery.matches) {
      canvas.style.display = 'none';
      return;
    }

    resizeCanvas();
    initParticles();
    startAnimation();

    // Event listeners (passive)
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    }, { passive: true });

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    document.addEventListener('visibilitychange', onVisibilityChange);

    mediaQuery.addEventListener('change', handleMediaChange);
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
