/* ═══════════════════════════════════════════════
   reveal.js — Intersection Observer para animaciones de entrada
   ✅ FIJO — Cualquier elemento con clase .reveal se anima al entrar en viewport
   ═══════════════════════════════════════════════ */

(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // Dejar de observar una vez visible para mejor performance
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();
