/* ═══════════════════════════════════════════════
   nav.js — Navbar scroll effect
   ✅ FIJO
   ═══════════════════════════════════════════════ */

(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
})();
