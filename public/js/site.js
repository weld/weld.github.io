(function() {
  'use strict';
  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = theme => localStorage.setItem('theme', theme);
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  const setTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;
    const icon = toggleBtn.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
    } else {
      icon.className = 'fas fa-moon';
    }
  };
  document.addEventListener('DOMContentLoaded', () => {
    setTheme(getPreferredTheme());
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-bs-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        setStoredTheme(next);
        setTheme(next);
      });
    }
  });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!getStoredTheme()) setTheme(e.matches ? 'dark' : 'light');
  });
})();
