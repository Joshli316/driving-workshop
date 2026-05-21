(function () {
  const saved = localStorage.getItem('ddw_lang');
  if (saved === 'en') document.body.classList.remove('zh');
})();
