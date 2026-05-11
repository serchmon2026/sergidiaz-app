/* ═══════════════════════════════════════════════
   cookies.js — Cookie consent banner (RGPD / ePrivacy)
   ✅ FIJO
   Guarda la preferencia en localStorage con la key 'sd_cookie'
   Valores: 'all' | 'necessary'
   ═══════════════════════════════════════════════ */

(function () {
  const STORAGE_KEY = 'sd_cookie';
  const banner      = document.getElementById('cookieBanner');
  const btnAccept   = document.getElementById('cookieAccept');
  const btnReject   = document.getElementById('cookieReject');

  if (!banner) return;

  // Mostrar si aún no ha decidido
  if (!localStorage.getItem(STORAGE_KEY)) {
    banner.classList.remove('hidden');
  }

  function dismiss(value) {
    localStorage.setItem(STORAGE_KEY, value);
    banner.classList.add('hidden');

    // Hook para analytics: si el usuario acepta, inicializar aquí
    if (value === 'all') {
      // window.initAnalytics && window.initAnalytics();
    }
  }

  btnAccept && btnAccept.addEventListener('click', () => dismiss('all'));
  btnReject && btnReject.addEventListener('click', () => dismiss('necessary'));
})();
