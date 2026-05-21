(function () {
  'use strict';

  function toggleLang() {
    const isZh = document.body.classList.toggle('zh');
    localStorage.setItem('ddw_lang', isZh ? 'zh' : 'en');
    document.documentElement.lang = isZh ? 'zh-Hans' : 'en';
    document.getElementById('langToggle').textContent = isZh ? '中文' : 'EN';
  }

  (function initLang() {
    const saved = localStorage.getItem('ddw_lang');
    const isZh = saved !== 'en';
    document.body.classList.toggle('zh', isZh);
    document.documentElement.lang = isZh ? 'zh-Hans' : 'en';
    document.getElementById('langToggle').textContent = isZh ? '中文' : 'EN';
  })();

  const ACTIONS = {
    'toggle-lang': toggleLang,
    'print': function () { window.print(); },
  };

  document.body.addEventListener('click', function (e) {
    const trigger = e.target.closest('[data-action]');
    if (!trigger) return;
    const fn = ACTIONS[trigger.dataset.action];
    if (fn) { fn(); }
  });

  try {
    new QRCode(document.getElementById('qr-top'), {
      text: 'https://driving-workshop.pages.dev',
      width: 100,
      height: 100,
      colorDark: '#c2410c',
      colorLight: '#ffffff'
    });
  } catch (e) {
    const el = document.getElementById('qr-top');
    if (el) el.textContent = 'driving-workshop.pages.dev';
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
})();
